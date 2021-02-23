<script lang='ts' src='./game.ts'>
</script>
<template>
  <div>
    <img
      id="catButton"
      src="@/assets/game/cat.png"
      width="32"
      @click="onClickCat()"
    />
  </div>
</template>
<style>
#catButton {
  cursor: pointer;
}

#game_src {
  display: none;
}

body.game {
  cursor: url("~@/assets/game/boll.png"), pointer;
}

.game_cat {
  position: absolute;
  pointer-events: none;
}

.game_cat img {
  position: absolute;
}

.nya {
  position: absolute;
  color: red;
  font-weight: bold;
}

.rest {
  position: fixed;
  top: 5px;
  right: 80px;
  /*height:100%;*/
  z-index: 2;
  overflow: auto;

  color: #0000dd;
  font-size: 200%;
  text-shadow: 1px 1px 1px #111111;
}

#topButton:hover,
#catButton:hover {
  /*
	background-color: #c9c9c9;
	*/
  filter: invert(100%);
}
</style>