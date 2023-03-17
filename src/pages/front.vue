<script lang='ts' setup>
import FrontContact from './fronts/FrontContact.vue';
import FrontPast from './fronts/FrontPast.vue';
import FrontStrong from './fronts/FrontStrong.vue';
import ScrollOut from "scroll-out";
//import * as AOS from "aos";

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
        <FrontStrong />
        <FrontPast />
        <FrontContact />
    </div>
</template>      