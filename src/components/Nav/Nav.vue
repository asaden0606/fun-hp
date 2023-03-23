<script lang="ts" setup>
import { ref } from 'vue';
import NavOpener from '../Nav/NavOpener.vue';

interface MenuItem {
  icon: string;
  text: string;
  link: string;
}
const MENUS: MenuItem[] = [
  {
    text: "私の強み",
    icon: require("@/assets/img/nav/kiso.png"),
    link: "#strong",
  },
  {
    text: "過去の実績",
    icon: require("@/assets/img/nav/mysys.png"),
    link: "#past",
  },
  {
    text: "会社概要",
    icon: require("@/assets/img/nav/macro.png"),
    link: "#company",
  },
];




const isShow = ref(false);

const onClick = () => {
  isShow.value = !isShow.value;
}
</script>
<template>
  <div class="root">
    <div class="menuItems" :class="{ show: isShow }">
      <a class=" item" v-for="menu of     MENUS" :key="menu.link" :href="menu.link">
        <div class="icon">
          <img :src="menu.icon" />
        </div>
        <div class="text">{{ menu.text }}</div>
      </a>
    </div>
    <div class="opener" @click="onClick()">
      <NavOpener :isShow="isShow">
      </NavOpener>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/css/share";


.root {
  .menuItems {
    background-color: #eeffeecb;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    height: 70px;
    margin-bottom: 70px;
    display: flex;

    .item {
      cursor: pointer;
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

  .opener {
    display: none;
  }

  @include sp($sph) {
    .menuItems {
      width: 60vw;
      height: 90vh;
      left: initial;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: visible;
      margin-bottom: 0;
      transition: transform 0.5s;
      transform: scale(0, 1);
      transform-origin: top right;

      &.show {
        transform: scale(1, 1)
      }
    }

    .opener {
      display: block;
    }    
  }
}
</style>
