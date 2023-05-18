<script lang='ts' setup>
import { computed, onMounted, ref, watchEffect } from 'vue';

const width = ref(0);

const chartWidth = computed(() => {
  return Math.min(width.value - 50, 800);
});

const chartHeight = computed(() => {
  return chartWidth.value * 1.4;
});

const calculateWindowWidth = () => {
  width.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener('resize', calculateWindowWidth);
});

watchEffect(() => {
  calculateWindowWidth();
});


</script>
<template>
  <div class="root" id="past">
    <div class="addpadding">
      <h2 class="maintitle">過去の実績</h2>
      <h3 class="subtitle">実績一覧</h3>
      <ul>
        <li>アパレルショッピングのECサイトの構築</li>
        <li>販売在庫管理システムの作成</li>
        <li>スクレイピングシステムの作成</li>
        <li>インジケータ/EAの作成</li>
      </ul>

      <h3 class="subtitle">FX/株のシステムトレードが得意</h3>
      <p>
        私は趣味として、株やFXのトレードをしておりますが、そのなかでシステムトレードをよく用いてます。
        ソフト名をあげますと、株はTradeStationを、FXではMT4です。
        自作のインジケータやEAも作成してます。
      </p>
      <img src="@/assets/img/past/mt4.png" class="-js-fade-left mt4" data-scroll="out" />

      <p>
        また、私は自作のシステムにより持ち株/為替を管理しております。
        以下は趣味で作成しました自作のシステムのサンプルプログラムの一端です。
      </p>
      <ChartComponent kind="basic" code="201" span="w" :width="chartWidth" :height="chartHeight" />
      <!--
      <div class="-js-fade-left" data-scroll="out"></div>
        
      </div>
      -->
    </div>

  </div>
</template>
<style lang='scss' scoped>
@import "@/css/share.scss";

.root {
  .addpadding {
    padding-left: 3em;
    padding-right: 3em;

    .mt4 {
      max-width: 800px;
      width: 100%;
    }

    @include sp($sph) {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
}
</style>