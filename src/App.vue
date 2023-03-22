<script lang='ts' setup>
import NavComponent from "@/components/nav.vue";
import GameComponent from "@/components/game.vue";
</script>
<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="menu_content">
      <router-view />
    </div>
    <game-component></game-component>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";
@import "@/css/form";
</style>
<style lang='scss'>
@import "@/css/share.scss";
</style>
