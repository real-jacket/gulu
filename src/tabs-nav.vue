<template>
    <div class="tabs-nav">
        <slot></slot>
        <div ref="line" class="line"></div>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNav',
        inject:['eventBus'],
        props:{
        },
        created(){
        },
        mounted(){
            this.eventBus.$on('update:selected',(item,vm)=>{
                let {top,left,height,width} = vm.$el.getBoundingClientRect()
                let parentleft = this.$el.getBoundingClientRect().left
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left-parentleft}px`
            })
        }
    }
</script>
<style scoped lang="scss">
    $tab-height:40px;
    $blue:#409EFF;
    .tabs-nav{
        height: $tab-height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 2px solid rgb(228,231,237);
        position: relative;
        & > .line{
            border-bottom: 2px solid $blue;
            position: absolute;
            bottom: -2px;
            transition: all 250ms;
        }
        & > .action-wrapper{
            margin-left: auto;
        }
    }
</style>