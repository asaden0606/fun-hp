import { Component, Prop, Vue, Provide } from "vue-property-decorator";



interface MenuItem{
    icon:string;    
    text:string;
    link:string;    
}


@Component({
    components: {
    }
})
export default class App extends Vue {
    menuItems:MenuItem[] = [
        {
            text:"私の強み",
            icon:require('@/assets/top_kiso.png'),
            link:"/"
        },
        {
            text:"過去の実績",
            icon:require('@/assets/top_mysys.jpg'),
            link:"/past"
        },
        {
            text:"お問い合わせ",
            icon:require('@/assets/top_macro.png'),
            link:"/contact"
        }        
    ];
    created() {

    }
}