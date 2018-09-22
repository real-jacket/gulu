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
        }
    }
</script>
<style lang="scss"></style>