<script lang='ts' src='./header.ts'>
</script>
<template>
    <div>
      <img src="@/assets/title.png" width='80%' height='150px' />
      <div id="title" class="title">あさでんのサイト</div>
    </div>
</template>
<style lang='scss'>
@import "@/css/share";
.header {
  text-align: center;  
}

.title {
  text-align: center;
  position: relative;
  top: -50px;
  margin-bottom:-60px;

  @include sp($sph){
    //top:-100px;  
  }
}

.title text {
  color: #dddddd;
  text-shadow: 5px 5px 1px #111111;
  font-size:5rem;
  position: relative;
  @include sp($sph){
    font-size:3rem;
  }
}

.title {
  display: none;
}
</style>
