<template>
    <div class="tabs-nav">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNav',
        props:{
        },
        created(){
        }
    }
</script>
<style lang="scss"></style>