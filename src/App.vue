<script lang='ts' src='./App.ts'>
</script>
<template>
  <div id="app">
    <div class="content_header">
      <header-component></header-component>
      <nav-component></nav-component>
    </div>
    <div class="menu_content">
      <router-view />
    </div>
    <game-component></game-component>
  </div>
</template>
<style lang='scss'>
.content_header{
	background-color: #EEFFEE;	
}

.menu_content{
  padding:1em;  
}
</style>
<style lang='scss' src='./css/form.scss'>
</style>