<script lang='ts' setup>
import * as TH from "three";
import { Vector2 } from "three";
import $ from "jquery";
import { computed, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
const COLLISION_ELEMS = '.menu_content >*:visible'
const CAT_VECTOR_SIZE = 0.3;
const INTERVAL = 100;
const BIGGER = 1;

interface TextInfo {
  textPos: TH.Vector2;
  radius: number;
  elem: JQuery;
  visible: boolean;
}

const $catParent = ref<JQuery>(undefined);
const timer = ref<number>(undefined);
const allTexts = ref<TextInfo[]>([]);
const $collisionElems = ref<JQuery>(undefined);
const mousePosition = ref<TH.Vector2>(new TH.Vector2());
const isPlaying = ref(false);
const restSize = ref(0);
const catWidth = ref(64);
const catHeight = ref(64);
const route = useRoute();

const toggleCat = () => {
  if (isPlaying.value) {
    stop();
  }
  else {
    start();
  }
}

watch([route], () => {
  if (isPlaying.value) {
    stop();
  }
});

const start = () => {
  isPlaying.value = true;
  catWidth.value = 64;
  catHeight.value = 64;
  restSize.value = 0;
  $catParent.value = $(`.game_cat_parent`);
  $collisionElems.value = $(COLLISION_ELEMS);
  allTexts.value = [];


  $collisionElems.value.find('*').each((_, parent) => {
    let $parent = $(parent);

    if ($parent.get(0).tagName.toLowerCase() === "img") {
      let pos = $parent.position();
      let width = $parent.width();
      let height = $parent.height();
      let textPos = new Vector2(pos.left + width / 2.0, pos.top + height / 2.0);

      $parent.addClass('parent');
      allTexts.value.push(
        {
          textPos: textPos,
          radius: width / 2.0,
          elem: $parent,
          visible: true
        });
    }
    else if ($parent.children().length == 0 && $parent.text() !== "") {
      //テキスト系    
      let text = $parent.text().trim();
      text = text.replace(/ /g, '');
      text = text.replace(/　/g, '')
      $parent.text('');
      $parent.addClass('parent');
      $parent.data('text', text);

      for (let i = 0; i < text.length; i++) {
        let c = text.substring(i, i + 1);

        let $c = $(`<text>${c}</text>`).appendTo(
          $parent
        );
        let pos = $c.position();
        let width = $c.width();
        let height = $c.height();
        let textPos = new Vector2(pos.left + width / 2.0, pos.top + height / 2.0);

        allTexts.value.push(
          {
            textPos: textPos,
            radius: width / 2,
            elem: $c,
            visible: true
          });
      }
    }
  });


  //console.log("beginCat",this.mousePosition.x,this.mousePosition.y)
  $catParent.value.offset({ left: mousePosition.value.x, top: mousePosition.value.y });
  timer.value = <any>setInterval(() => {
    action();
  }, INTERVAL);


  $('html').addClass('game');
}

const stop = () => {
  isPlaying.value = false;
  clearInterval(timer.value);
  $('html').removeClass('game');
  $('.parent').each((_, parent) => {
    let $parent = $(parent);
    let tagName = $parent.get(0).tagName;
    if (tagName.toLowerCase() === "img") {
      //画像系
      $parent.css("visibility", "visible");
    }
    else {
      let text = <any>$parent.data('text');
      $parent.text(text);
    }
  });
  $('.parent').children().remove();
  $('.parent').removeClass('parent');
}

const isCollision = (pos1: TH.Vector2, c1: number, pos2: TH.Vector2, c2: number) => {
  let cDist = c1 + c2;
  return pos1.distanceToSquared(pos2) <= cDist * cDist;
}


const calcCatPosition = () => {
  let catPosition = new TH.Vector2($catParent.value.position().left, $catParent.value.position().top);
  let vec = mousePosition.value.clone().sub(catPosition);
  if (vec.length() <= CAT_VECTOR_SIZE * INTERVAL) {
    return mousePosition.value.clone();
  }

  vec.normalize();
  vec.multiplyScalar(CAT_VECTOR_SIZE * INTERVAL);
  return catPosition.add(vec);
}

const addNya = (pos: TH.Vector2) => {
  let $c = $(`<text class='nya'>にゃー</text>`).appendTo($collisionElems.value);
  $c.offset({
    left: pos.x,
    top: pos.y
  });
  $c.animate({
    top: pos.y - 100,
    opacity: 0
  }, 1000, () => {
    $c.remove();
  });
}


const catLeft = computed(() => {
  return `${catWidth.value * -0.5}px`;
});

const catTop = computed(() => {
  return `${catHeight.value * -0.5}px`;
})

const action = () => {
  //猫を移動
  let catPos = calcCatPosition();
  $catParent.value.offset({
    left: catPos.x,
    top: catPos.y,
  });

  //食べ物と猫の当たり判定
  let catSize = catWidth.value / 2.0;
  allTexts.value.filter((val) => {
    return val.visible === true;
  }).forEach((text) => {
    if (isCollision(text.textPos, text.radius, catPos, catSize)) {
      text.elem.css('visibility', 'hidden');
      catWidth.value = catWidth.value + BIGGER;
      catHeight.value = catHeight.value + BIGGER;
      text.visible = false;

      addNya(catPos.add(new TH.Vector2(0, -50)));
    }
  });

  restSize.value = allTexts.value.filter((val) => {
    return val.visible === true;
  }).length;
}

const restText = computed(() => {
  return restSize.value === 0 ? "お腹いっぱいにゃー" : `残　${restSize.value}餌`;
});


watchEffect(() => {
  $(window).mousemove((event) => {
    mousePosition.value = new Vector2(event.pageX, event.pageY);
  });
});
/*

*/
</script>
<template>
  <div>
    <div v-show="isPlaying">
      <div class="rest">
        {{ restText }}
      </div>
      <div class="game_cat_parent">
        <img class="game_cat" src="@/assets/img/game/cat.png" :width="catWidth" :height="catHeight"
          :style="{ left: catLeft, top: catTop }" />
      </div>
    </div>
    <div v-show="!isPlaying">
      <img id="catButton" src="@/assets/img/game/cat.png" @click="toggleCat()" />
    </div>
  </div>
</template>
<style>
#catButton {
  cursor: pointer;
  width: 32px;
  position: fixed;
  bottom: 0em;
  right: 0em;
}

#game_src {
  display: none;
}

html.game {
  cursor: url("~@/assets/img/game/boll.png") 4 4, pointer;
}

.game_cat_parent {
  position: absolute;
  pointer-events: none;
}

.game_cat {
  position: relative;
  pointer-events: none;
  opacity: 0.8;
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