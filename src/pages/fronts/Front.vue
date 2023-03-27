<script lang="ts" setup>
import FrontBg from "./FrontBg.vue";
import FrontTitle from "./FrontTitle.vue";
import FrontScroll from "./FrontScroll.vue";
import FrontCompany from "./FrontCompany.vue";
import FrontPast from "./FrontPast.vue";
import FrontStrong from "./FrontStrong.vue";
import { onMounted } from "vue";

onMounted(() => {
  $(".-js-fade-right").on("inview", function () {
    $(this).attr("data-scroll", "in");
  });

  $(".-js-fade-left").on("inview", function () {
    $(this).attr("data-scroll", "in");
  });

  $(".anime-title").on("inview", function () {
    (<any>$(".anime-title")).textillate();
    $(this).css("opacity", 1);
  });

  $(".maintitle").on("inview", function () {
    (<any>$(this)).textillate({
      in: {
        effect: "bounce",
      },
    });

    $(this).css("opacity", 1);
  });

  $(".subtitle").on("inview", function () {
    (<any>$(this)).textillate();
    $(this).css("opacity", 1);
  });
});
</script>
<template>
  <div class="root">
    <div class="content">
      <FrontTitle />
      <FrontScroll />
      <div class="white">
        <div class="whiteItem">
          <FrontStrong />
        </div>
        <div class="whiteItem">
          <FrontPast />
        </div>
        <div class="whiteItem">
          <FrontCompany />
        </div>
      </div>
    </div>
    <div class="bg">
      <FrontBg />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/css/share";

.root {
  position: relative;

  .content {
    position: relative;
    z-index: 1;

    .white {
      width: 100vw;

      .whiteItem {
        padding-top: 150px;
        padding-bottom: 150px;
        margin-bottom: 3em;
        //-webkit-clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
        clip-path: polygon(0 0, 100% 100px, 100% 100%, 0% calc(100% - 100px));

        div {
          max-width: 1024px;
          background: rgba(255, 255, 255, 0.261);
          margin: auto;
          border-radius: 40px;

          @include sp($sph) {
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
        }

        &:nth-child(odd) {
          background: rgba(203, 206, 227, 0.903);
        }

        &:nth-child(even) {
          background: rgba(206, 227, 203, 0.903);
        }
      }
    }
  }


  .bg {
    position: fixed;
    top: 70px;
    z-index: 0;

    @include sp($sph) {
      top: 0;
    }
  }
}
</style>
