import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import NavComponent from "@/components/nav/nav.vue";
import HeaderComponent from "@/components/header/header.vue";
import GameComponent from "@/components/game/game.vue";
@Component({
  components: {
    HeaderComponent,
    NavComponent,
    GameComponent
  }
})
export default class App extends Vue {

  created() {

  }
}