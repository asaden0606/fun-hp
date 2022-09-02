import { Options, Vue } from "vue-class-component";
import { Inject, Prop, Watch } from 'vue-property-decorator';



interface MenuItem{
    icon:string;    
    text:string;
    link:string;    
}


@Options({
    components: {
    }
})
export default class App extends Vue {
    menuItems:MenuItem[] = [
        {
            text:"私の強み",
            icon:require('@/assets/nav/kiso.png'),
            link:"/"
        },
        {
            text:"過去の実績",
            icon:require('@/assets/nav/mysys.png'),
            link:"/past"
        },
        {
            text:"お問い合わせ",
            icon:require('@/assets/nav/macro.png'),
            link:"/contact"
        }        
    ];
    created() {

    }
}