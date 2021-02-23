import { Component, Prop, Vue, Provide } from "vue-property-decorator";

const TITLE_PNG = require('@/assets/title.png');

@Component({
    components: {
    }
})
export default class App extends Vue {
    TITLE_PNG = TITLE_PNG;
    created() {

    }
}