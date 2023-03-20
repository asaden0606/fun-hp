<script lang='ts' setup>
import $ from 'jquery';
import { onMounted } from "vue";

onMounted(() => {
  let $title = $('#title');
  let titleText = $title.text();
  $title.show();
  $title.text("");
  console.log(titleText);

  for (let i = 0; i < titleText.length; i++) {
    let c = titleText.substring(i, i + 1);
    let $item = $(`<text>${c}</text>`).appendTo($title);
    $item.css('left', getRandom(-200, 200));
    $item.css('top', getRandom(-200, 200));
    $item.animate({ left: 0, top: 0 }, 2000);
  }
});

const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

</script>
<template>
  <div class="header">
    <img class="bk" src="@/assets/img/title.png" />
    <div id="title" class="title">あさでんのポートフォリオ</div>
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

  @include sp($sph) {
    width: 100%;
  }
}

.title {
  text-align: center;
  position: relative;
  top: -50px;
  margin-bottom: -60px;
  display: none;

  text {
    color: $theme4;
    text-shadow: 5px 5px 1px #111111;
    font-size: 5rem;
    position: relative;

    @include sp($sph) {
      font-size: 3rem;
    }
  }
}
</style>
