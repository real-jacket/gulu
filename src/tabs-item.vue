<template>
    <div class="tabs-nav-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNavItem',
        props:{
            disabled:{
                type:Boolean,
                default:false
            }
        }
    }
</script>
<style lang="scss"></style>