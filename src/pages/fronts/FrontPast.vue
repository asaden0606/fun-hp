<script lang='ts' setup>
</script>
<template>
  <div id="past">
    <h2>実績一覧</h2>
    <ul>
      <li>アパレルショッピングのECサイトの構築</li>
      <li>販売在庫管理システムの作成</li>
      <li>スクレイピングシステムの作成</li>
      <li>インジケータ/EAの作成</li>
    </ul>

    <h2>FX/株のシステムトレードが得意</h2>
    <p>
      私は趣味として、株やFXのトレードをしておりますが、そのなかでシステムトレードをよく用いてます。
      ソフト名をあげますと、株はTradeStationを、FXではMT4です。
      自作のインジケータやEAも作成してます。
    </p>
    <img src="@/assets/past/mt4.png" class="-js-fade-left mt4" data-scroll="out" />
    <p>
      また、私は自作のシステムにより持ち株/為替を管理しております。
      以下は趣味で作成しました自作のシステムのサンプルプログラムの一端です。
    </p>
    <div class="-js-fade-left" data-scroll="out">
      <chart-component kind="price" code="201" span="w"></chart-component>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.mt4 {
  width: 100vw;
  max-width: 800px;
}
</style>