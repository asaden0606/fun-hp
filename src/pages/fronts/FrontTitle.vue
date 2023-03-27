<script lang='ts' setup>
</script>
<template>
    <div class="root">
        <h1 class="anime-title">地元鹿児島を愛して、帰郷</h1>
        <h1 class="anime-title">鹿児島より最新の技術を発信していきます。</h1>
    </div>
</template>
<style lang="scss" scoped>
@import "@/css/share.scss";

.root {
    max-width: 600px;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    height: 80vh;

    .anime-title {
        opacity: 0;
        font-size: 2.5rem;
        font-style: italic;
        line-height: 2em;
        font-weight: bold;
        text-align: center;
        text-shadow:
            0 0.03em 0.03em #FFAB91,
            0 0.03em 0.03em #000,
            0 0.03em 0.03em #FBE9E7;

        @include sp($sph) {
            font-size: 1.3rem;
        }
    }

    @include sp($sph) {
        height: 80vh;
    }
}
</style>