import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import $ from 'jquery';
const TITLE_PNG = require('@/assets/title.png');

@Component({
    components: {
    }
})
export default class App extends Vue {
    TITLE_PNG = TITLE_PNG;
    created() {

    }

    mounted(){
        this.createRupan();    
    }


    private getRandom(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    private createRupan() {
        let $title = $('#title');
        let titleText = $title.text();
        $title.show();
        $title.text("");
        console.log(titleText);

        for (let i = 0; i < titleText.length; i++) {
            let c = titleText.substring(i, i + 1);
            let $item = $(`<text>${c}</text>`).appendTo($title);
            $item.css('left',this.getRandom(-500, 500));
            $item.css('top', this.getRandom(-500, 500));
            $item.animate({ left: 0, top: 0 }, 2000);
        }
    }
}