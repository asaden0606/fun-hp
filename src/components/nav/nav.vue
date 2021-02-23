<script lang='ts' src='./nav.ts'>
</script>
<template>
  <div class="menu_header">
    <router-link v-for="menu of menuItems" :key="menu.link" :to="menu.link">
      <img :src="menu.icon" class="icon" />
      <span class="header">{{ menu.text }}</span>
    </router-link>
  </div>
</template>
<style lang='scss'>
.menu_header {
  cursor: pointer;
  display: flex;
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
