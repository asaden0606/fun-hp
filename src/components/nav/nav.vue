<script lang='ts' src='./nav.ts'>
</script>
<template>
  <div class="menu_header">
    <router-link
      class="menu"
      v-for="menu of menuItems"
      :key="menu.link"
      :to="menu.link"
    >
      <div>
        <img :src="menu.icon" class="icon" />
      </div>
      <div class="menu-text">{{ menu.text }}</div>
    </router-link>
  </div>
</template>
<style lang='scss'>
@import "@/css/share";
.menu_header {
  cursor: pointer;
  display: flex;
  padding-left: 1em;
  padding-right: 1em;
  max-width:400px;
  justify-content: space-between;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-color:$theme5;
}

.menu {
  transition: 1s;
  -webkit-transition: 1s;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.5);
  }
}

.menu-text{
  font-size:1rem;

  @include sp($sph) {
    font-size:0.5rem;  
  }
}
</style>
