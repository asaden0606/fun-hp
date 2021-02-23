import { Component, Prop, Vue, Provide, Watch } from "vue-property-decorator";
import * as TH from "three";
import { Vector2 } from "three";
import $ from "jquery";
const COLLISION_ELEMS = '.menu_content >*:visible'

const CAT_VECTOR_SIZE = 0.3;
const INTERVAL = 100;
const BIGGER = 1;


interface TextInfo {
    textPos: TH.Vector2;
    radius: number;
    elem: JQuery;
    visible: boolean;
}

@Component({
    components: {
    }
})
export default class App extends Vue {
    private $catParent: JQuery;
    private timer: number;
    private allTexts = new Array<TextInfo>();
    private $collisionElems: JQuery;

    mousePosition = new TH.Vector2();
    isPlaying = false;
    restText: string = null;

    catWidth = 64;
    catHeight = 64;

    toggleCat() {
        if (this.isPlaying) {
            this.stop();
        }
        else {
            this.start();
        }
    }

    created() {
        $(window).mousemove((event) => {
            this.mousePosition = new Vector2(event.pageX, event.pageY);
        });

    }

    @Watch("@route")
    routeChanged() {
        if (this.isPlaying) {
            this.stop();
        }
    }

    mounted() {

    }


    public start(): void {
        this.isPlaying = true;
        this.$catParent = $(`.game_cat_parent`);
        this.$collisionElems = $(COLLISION_ELEMS);

        this.$collisionElems.find('*').each((_, parent) => {
            let $parent = $(parent);

            if ($parent.get(0).tagName.toLowerCase() === "img") {
                let pos = $parent.position();
                let width = $parent.width();
                let height = $parent.height();
                let textPos = new Vector2(pos.left + width / 2.0, pos.top + height / 2.0);

                $parent.addClass('parent');
                this.allTexts.push(
                    {
                        textPos: textPos,
                        radius: width / 2.0,
                        elem: $parent,
                        visible: true
                    });
            }
            else if ($parent.children().length == 0 && $parent.text() !== "") {
                //テキスト系    
                let text = $parent.text().trim();
                text = text.replace(/ /g, '');
                text = text.replace(/　/g, '')
                $parent.text('');
                $parent.addClass('parent');
                $parent.data('text', text);

                for (let i = 0; i < text.length; i++) {
                    let c = text.substring(i, i + 1);

                    let $c = $(`<text>${c}</text>`).appendTo(
                        $parent
                    );
                    let pos = $c.position();
                    let width = $c.width();
                    let height = $c.height();
                    let textPos = new Vector2(pos.left + width / 2.0, pos.top + height / 2.0);

                    this.allTexts.push(
                        {
                            textPos: textPos,
                            radius: width / 2,
                            elem: $c,
                            visible: true
                        });
                }
            }
        });


        this.$catParent.offset({ left: this.mousePosition.x, top: this.mousePosition.y });
        this.timer = <any>setInterval(() => {
            this.action();
        }, INTERVAL);


        $('body').addClass('game');
    }

    public stop() {
        this.isPlaying = false;
        clearInterval(this.timer);
        $('body').removeClass('game');
        console.log(this.$catParent);

        $('.parent').each((_, parent) => {
            let $parent = $(parent);
            let tagName = $parent.get(0).tagName;
            if (tagName.toLowerCase() === "img") {
                //画像系
                $parent.css("visibility", "visible");
            }
            else {
                let text = <any>$parent.data('text');
                $parent.text(text);
            }
        });
        $('.parent').children().remove();
        $('.parent').removeClass('parent');
        $(window).mousemove(null);
        this.allTexts = new Array<TextInfo>();
    }

    private isCollision(pos1: TH.Vector2, c1: number, pos2: TH.Vector2, c2: number): boolean {
        let cDist = c1 + c2;
        return pos1.distanceToSquared(pos2) <= cDist * cDist;
    }


    private calcCatPosition(): TH.Vector2 {
        let catPosition = new TH.Vector2(this.$catParent.position().left, this.$catParent.position().top);
        let vec = this.mousePosition.clone().sub(catPosition);
        if (vec.length() <= CAT_VECTOR_SIZE * INTERVAL) {
            return this.mousePosition.clone();
        }

        vec.normalize();
        vec.multiplyScalar(CAT_VECTOR_SIZE * INTERVAL);
        return catPosition.add(vec);
    }

    private addNya(pos: TH.Vector2): void {
        let $c = $(`<text class='nya'>にゃー</text>`).appendTo(this.$collisionElems);
        $c.offset({
            left: pos.x,
            top: pos.y
        });
        $c.animate({
            top: pos.y - 100,
            opacity: 0
        }, 1000, () => {
            $c.remove();
        });
    }


    get catLeft() {
        return `${this.catWidth * -0.5}px`;
    }

    get catTop() {
        return `${this.catHeight * -0.5}px`;
    }

    private action(): void {
        //猫を移動
        let catPos = this.calcCatPosition();

        this.$catParent.offset({
            left: catPos.x,
            top: catPos.y,
        });

        //食べ物と猫の当たり判定
        let catSize = this.catWidth / 2.0;
        this.allTexts.filter((val) => {
            return val.visible === true;
        }).forEach((text) => {
            if (this.isCollision(text.textPos, text.radius, catPos, catSize)) {
                text.elem.css('visibility', 'hidden');
                this.catWidth = this.catWidth + BIGGER;
                this.catHeight = this.catHeight + BIGGER;
                text.visible = false;

                this.addNya(catPos.add(new TH.Vector2(0, -50)));
            }
        });

        let restSize = this.allTexts.filter((val) => {
            return val.visible === true;
        }).length;
        this.restText = restSize === 0 ? "お腹いっぱいにゃー" : `残　${restSize}餌`;
    }
}








