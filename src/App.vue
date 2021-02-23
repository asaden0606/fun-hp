<script lang='ts' src='./App.ts'>
</script>
<template>
  <div id="app">
    <div class="content_header">
      <header-component></header-component>
      <nav-component></nav-component>
    </div>
    <div class="content_root">
      <router-view />
    </div>
  </div>
</template>
<style lang='scss'>
.content_header{
	background-color: #EEFFEE;	
}
</style>
<style lang='scss' src='./css/form.scss'>
</style>