<script lang='ts' src='./header.ts'>
</script>
<template>
  <div class="header">
    <img class="bk" src="@/assets/title.png" />
    <div id="title" class="title">あさでんのサイト</div>
  </div>
</template>
<style lang='scss' >
@import "@/css/share";
.header {
  text-align: center;
}

.bk {
  width: 80%;
  height: 150px;

  @include sp($sph){
    width:100%;  
  }
}

.title {
  text-align: center;
  position: relative;
  top: -50px;
  margin-bottom: -60px;

  @include sp($sph) {
    //top:-100px;
  }
}

.title text {
  color: #dddddd;
  text-shadow: 5px 5px 1px #111111;
  font-size: 5rem;
  position: relative;
  @include sp($sph) {
    font-size: 3rem;
  }
}

.title {
  display: none;
}
</style>
