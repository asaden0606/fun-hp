import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import * as TH from "three";
import { Vector2 } from "three";
import $ from "jquery";
const COLLISION_ELEMS = '.menu_content >*:visible'


const CAT_IMAGE = require("@/assets/game/cat.png");
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
    private $cat: JQuery;
    private timer: number;
    private allTexts = new Array<TextInfo>();
    private $collisionElems: JQuery;

    mousePosition = new TH.Vector2();
    isPlaying = false;
    restText: string = null;

    toggleCat() {
        if (this.isPlaying){
            this.stop();
            this.isPlaying = false;
        }
        else {
            this.start();
            this.isPlaying = true;
        }
    }

    created(){       
        $(window).mousemove((event) => {
            this.mousePosition = new Vector2(event.pageX, event.pageY);
        });    
        
    }

    mounted(){
        
    }


    public start(): void {
        if (0 < $('.game_cat').length) {
            return;
        }

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

        this.$catParent = $(`<div class='game_cat'></div>`).appendTo(this.$collisionElems);
        this.$catParent.offset({ left: this.mousePosition.x, top: this.mousePosition.y });
        this.$cat = $(`<img src='${CAT_IMAGE}' width='64' height='64'/>`).appendTo(this.$catParent);
        this.$cat.css('left', this.$cat.width() * -0.5);
        this.$cat.css('top', this.$cat.height() * -0.5);

        this.timer = <any>setInterval(() => {
            this.action();
        }, INTERVAL);


        $('body').addClass('game');
    }

    public stop() {
        if (0 === $('.game_cat').length) {
            return;
        }
        clearInterval(this.timer);
        $('body').removeClass('game');
        console.log(this.$catParent);
        this.$catParent.remove();


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


    private action(): void {
        //猫を移動
        let catPos = this.calcCatPosition();

        this.$catParent.offset({
            left: catPos.x,
            top: catPos.y,
        });

        //食べ物と猫の当たり判定
        let catSize = this.$cat.width() / 2.0;
        this.allTexts.filter((val) => {
            return val.visible === true;
        }).forEach((text) => {
            if (this.isCollision(text.textPos, text.radius, catPos, catSize)) {
                text.elem.css('visibility', 'hidden');
                this.$cat.width(this.$cat.width() + BIGGER);
                this.$cat.height(this.$cat.height() + BIGGER);
                this.$cat.css('left', this.$cat.width() * -0.5);
                this.$cat.css('top', this.$cat.height() * -0.5);
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








