<script lang="ts" setup>
const p = defineProps<{
    isShow: boolean;
}>()

</script>
<template>
    <div class="OpenerRoot" :class="{ show: p.isShow }">
        <div class="OpenerItem"></div>
        <div class="OpenerItem"></div>
        <div class="OpenerItem"></div>
    </div>
</template>
<style lang="scss" scoped>
.OpenerRoot {
    cursor: pointer;
    position: fixed;
    right: 1em;
    width: 50px;
    height: 50px;
    top: 0.5em;
    margin: auto;
    z-index: 1000;

    .OpenerItem {
        width: 55px;
        border-top: solid 8px black;
        position: absolute;
        margin: 3px auto;
        transition: all .4s;

        &:nth-child(1) {
            top: calc(50% - 24px);
        }

        &:nth-child(2) {
            top: calc(50%);
        }

        &:nth-child(3) {
            top: calc(50% + 24px);
        }
    }


    &.show {
        mix-blend-mode: initial;

        .OpenerItem {
            &:nth-child(1) {
                top: 50%;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }

            &:nth-child(2) {
                display: none;
            }

            &:nth-child(3) {
                top: 50%;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }
}
</style>