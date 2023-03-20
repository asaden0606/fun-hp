<script lang='ts' setup>
</script>
<template>
    <div class="root">
        <h5 class="title">Scroll</h5>
        <div class="scroll-anime"></div>
    </div>
</template>
<style lang='scss' scoped>
.root {
    position: relative;
    width: 100vw;
    height: 100px;

    .title {
        margin: auto;
        writing-mode: vertical-rl;
        text-orientation: sideways;
        position: absolute;
        bottom: calc(20vh + 1em);
        left: calc(50% - 1em);
        color: white;
        font-size: 2.4rem;
        z-index: 1;
    }

    .scroll-anime {
        margin: auto;
        bottom: 0em;
        width: 20px;
        left: calc(50% - 3px);
        overflow: hidden;
        background: none;
        position: absolute;
        height: 20vh;
        z-index: 1;

        &:before {
            content: '';
            display: block;
            width: 2.5px;
            height: 100%;
            background: white;
            position: absolute;
            top: -100%;
            animation: scroll-animate 2s ease-in-out infinite;
        }
    }


    @keyframes scroll-animate {
        0% {
            top: -100%;
        }

        50% {
            top: 0;
        }

        100% {
            top: 100%;
        }
    }

}
</style>    
