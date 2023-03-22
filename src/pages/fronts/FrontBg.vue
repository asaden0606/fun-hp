<script lang='ts' setup>
</script>
<template>
    <img src="@/assets/img/front/bg.jpg" class="top" />
</template>
<style lang="scss" scoped>
@import "@/css/share.scss";

.top {
    width: 100vw;
    height: calc(100vh - 70px);
    object-fit: cover;

    @include sp($sph) {
        height: 100vh;
    }
}
</style>