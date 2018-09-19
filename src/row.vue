<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'guluRow',
        props:{
            gutter:[Number,String]
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        border: 1px solid red;
        background: #aaaaaa;
        display: flex;
    }
</style>