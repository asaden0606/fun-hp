import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import NavComponent from "@/components/nav/nav.vue";
import HeaderComponent from "@/components/header/header.vue";
@Component({
  components: {
    HeaderComponent,
    NavComponent  
  }
})
export default class App extends Vue {

  created() {

  }
}