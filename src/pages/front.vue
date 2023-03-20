<script lang='ts' setup>
import FrontHeader from "./fronts/FrontHeader.vue";
import FrontTitle from "./fronts/FrontTitle.vue";
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
});
</script>
<template>
    <div class="root">
        <div class="content">
            <FrontTitle />
            <div class="withbg">
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
.root {
    position: relative;

    .content {
        position: relative;
        z-index: 1;

        .withbg {
            padding: 1em;
            background: rgba(255, 255, 255, 0.9);
        }
    }

    .header {
        position: fixed;
        top: 80px;
        z-index: 0;
    }
}
</style>