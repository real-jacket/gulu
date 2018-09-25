<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluHeader'
    }
</script>
<style lang="scss" scoped>
    .header{
        background: rgb(190,235,159);
        height: 100px;
    }
</style>