<script lang="ts" setup>
interface MenuItem {
  icon: string;
  text: string;
  link: string;
}
const MENUS: MenuItem[] = [
  {
    text: "私の強み",
    icon: require("@/assets/nav/kiso.png"),
    link: "#top",
  },
  {
    text: "過去の実績",
    icon: require("@/assets/nav/mysys.png"),
    link: "#past",
  },
  {
    text: "お問い合わせ",
    icon: require("@/assets/nav/macro.png"),
    link: "#contact",
  },
];
</script>
<template>
  <div class="root">
    <a class="item" v-for="menu of MENUS" :key="menu.link" :href="menu.link">
      <div class="icon">
        <img :src="menu.icon" />
      </div>
      <div class="text">{{ menu.text }}</div>
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import "@/css/share";

.root {
  cursor: pointer;
  display: flex;
  background-color: #eeffeecb;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding-left: 1em;
  padding-right: 1em;
  z-index: 1000;

  .item {
    transition: 1s;
    -webkit-transition: 1s;
    display: flex;
    align-items: center;
    padding-right: 2em;

    &:hover {
      transform: scale(1.5);
    }

    .icon {
      img {
        width: 50px;
        height: 50px;
        border-radius: 40px;
        background-color: $theme5;
      }
    }

    .text {
      font-size: 1rem;

      @include sp($sph) {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
