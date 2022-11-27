<script lang='ts' setup>
import NavComponent from "@/components/nav.vue";
import HeaderComponent from "@/components/header.vue";
import GameComponent from "@/components/game.vue";
</script>
<template>
  <div id="app">
    <div class="content_header">
      <header-component></header-component>
      <nav-component></nav-component>
    </div>
    <div class="menu_content">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <game-component></game-component>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";
  html {
    background-color: $theme1;
    overflow-y: scroll;
    overflow-x:hidden;
      font-size: 12px;
    @include sp($sph) {
      font-size: 16px;
    }
  }
  
  body {
    margin: 0em;
  }
  
.content_header {
  background-color: #eeffee;
}

.menu_content {
  padding: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
<style lang='scss' src='./css/form.scss'>
</style>
