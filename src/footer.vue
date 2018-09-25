<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluFooter'
    }
</script>
<style lang="scss" scoped>
    .footer{
        background: rgb(121,189,143);
        height: 50px;
    }
</style>