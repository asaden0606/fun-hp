<script lang='ts' setup>
import FrontHeader from "./fronts/FrontHeader.vue";
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
    <div>
        <FrontHeader />
        <div class="content">
            <FrontStrong />
            <FrontPast />
            <FrontContact />
        </div>
    </div>
</template>      
<style lang="scss" scoped>
.content {
    padding: 1em;
}
</style>