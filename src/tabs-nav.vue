<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNav',
        props:{
        },
        created(){
        },
        mounted(){
        }
    }
</script>
<style scoped lang="scss">
    $tab-height:40px;
    .tabs-nav{
        height: $tab-height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > .action-wrapper{
            margin-left: auto;
        }
    }
</style>