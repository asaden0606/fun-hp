<script lang='ts' setup>
import NavComponent from "@/components/nav.vue";
import GameComponent from "@/components/game.vue";

</script>
<template>
  <div id="app">
    <div class="menu_nav">
      <nav-component></nav-component>
    </div>
    <div class="menu_content">
      <router-view />
    </div>
    <game-component></game-component>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";
@import "@/css/form";


.menu_nav {
  margin-bottom: 70px;
}


.menu_content {
  padding: 1em;
}
</style>
<style lang='scss'>
@import "@/css/share.scss";

.content_root {
  @include pc($pch) {
    margin: 1em;
  }

  @include sp($sph) {
    margin: 0.1em;
  }
}
</style>
