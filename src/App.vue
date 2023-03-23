<script lang='ts' setup>
import NavComponent from "@/components/Nav/Nav.vue";
import GameComponent from "@/components/Game.vue";
</script>
<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="menu_content">
      <router-view />
    </div>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";
@import "@/css/form";
</style>
<style lang='scss'>
@import "@/css/share.scss";
</style>
