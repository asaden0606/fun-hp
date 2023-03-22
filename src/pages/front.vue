<script lang='ts' setup>
import FrontHeader from "./fronts/FrontHeader.vue";
import FrontTitle from "./fronts/FrontTitle.vue";
import FrontScroll from "./fronts/FrontScroll.vue";
import FrontContact from './fronts/FrontContact.vue';
import FrontPast from './fronts/FrontPast.vue';
import FrontStrong from './fronts/FrontStrong.vue';
import ScrollOut from "scroll-out";

import { onMounted } from 'vue';

onMounted(() => {
    ScrollOut({
        targets: ".-js-fade",
        once: "true",
        threshold: 0.5,
        offsetY: 400
    });
    ScrollOut({
        targets: ".-js-fade-up",
        threshold: 0.5,
        once: "true",
    });
    ScrollOut({
        targets: ".-js-fade-down",
        threshold: 0.5,
        once: "true",
    });
    ScrollOut({
        targets: ".-js-fade-left",
        threshold: 0.5,
        once: "true",
    });
    ScrollOut({
        targets: ".-js-fade-right",
        threshold: 0.5,
        once: "true",
    });


    $('.anime-title').on('inview', function () {
        (<any>$(".anime-title")).textillate();
    });

    $('.maintitle').on('inview', function () {
        (<any>$(this)).textillate({
            in: {
                effect: 'bounce',
            }
        })

        $(this).css("opacity", 1);
    })

    $('.subtitle').on('inview', function () {
        (<any>$(this)).textillate();
        $(this).css("opacity", 1);
    })
});
</script>
<template>
    <div class="root">
        <div class="content">
            <FrontTitle />
            <FrontScroll />
            <div class="bg">
                <FrontStrong />
                <FrontPast />
                <FrontContact />
            </div>
        </div>
        <div class="header">
            <FrontHeader />
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

        .bg {
            width: 100vw;

            * {
                padding-top: 150px;
                padding-bottom: 150px;
                margin-bottom: 3em;
                //-webkit-clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
                clip-path: polygon(0 0, 100% 100px, 100% 100%, 0% calc(100% - 100px));
            }

            *:nth-child(odd) {
                background: rgba(203, 206, 227, 0.903);
            }

            *:nth-child(even) {
                background: rgba(206, 227, 203, 0.903);
            }
        }
    }

    .header {
        position: fixed;
        top: 70px;
        z-index: 0;

        @include sp($sph) {
            top: 0;
        }
    }
}
</style>