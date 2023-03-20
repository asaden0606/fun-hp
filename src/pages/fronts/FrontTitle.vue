<script lang='ts' setup>
import { onMounted } from 'vue';

onMounted(() => {
    (<any>$(".title")).textillate();
})
</script>
<template>
    <div class="root">
        <h1 class="title">地元鹿児島を愛して、帰郷。鹿児島より最新の技術を発信していきます。</h1>
    </div>
</template>
<style lang="scss" scoped>
.root {
    max-width: 500px;
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.title {
    font-size: 3rem;
    font-style: italic;
    line-height: 2em;
    font-weight: bold;
    text-align: center;
    text-shadow:
        0 0.03em 0.03em #FFAB91,
        0 0.03em 0.03em #000,
        0 0.03em 0.03em #FBE9E7;

}
</style>