<script lang='ts' src='./header.ts'>
</script>
<template>
  <div>
    <div class="header">
      <img :src="TITLE_PNG" width='100%' height='150px' />
      <div id="title" class="title">あさでんのサイト</div>
    </div>
  </div>
</template>
<style lang='scss'>
.header {
  text-align: center;
}

.title {
  text-align: center;
  position: relative;
  top: -80px;
  margin-bottom: -90px;
}

.title text {
  color: #dddddd;
  text-shadow: 5px 5px 1px #111111;
  font-size: 400%;
  position: relative;
}

.title {
  display: none;
}
</style>
