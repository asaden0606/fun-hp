<script lang="ts" setup>
</script>
<template>
    <div class="lp-drawer-btn js-lp-drawer">
        <div class="lp-drawer-btn__line"></div>
        <div class="lp-drawer-btn__line"></div>
        <div class="lp-drawer-btn__line"></div>
    </div>
</template>
<style lang="scss" scoped>
.lp-drawer-btn {
    position: fixed;
    right: 1em;
    width: 50px;
    top: 0.5em;
    margin: auto;
    z-index: 1000;
    mix-blend-mode: difference;
}

.lp-drawer-btn__line {
    width: 55px;
    border-top: solid 8px white;
}


.lp-drawer-btn__line:nth-child(1) {
    top: calc(50% - 24px);
}

.lp-drawer-btn__line:nth-child(2) {
    top: calc(50%);
}

.lp-drawer-btn__line:nth-child(3) {
    top: calc(50% + 24px);
}




.lp-drawer-btn.-show {
    mix-blend-mode: initial;
}





.lp-drawer-btn__line {
    position: absolute;
    margin: 3px auto;
    transition: all .4s;
}


.lp-drawer-btn.-show .lp-drawer-btn__line:nth-child(1) {
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.lp-drawer-btn.-show .lp-drawer-btn__line:nth-child(2) {
    display: none;
}

.lp-drawer-btn.-show .lp-drawer-btn__line:nth-child(3) {
    top: 50%;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>