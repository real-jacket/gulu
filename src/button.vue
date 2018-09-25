<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="g-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name:'guluButton',
        components:{
          'g-icon': Icon
        },
        props: {
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "var";
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .g-button {
        font-size: $font-size;
        line-height: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background: $button-active-bg;
        }
        &:focus {
            outline: none;
        }

        >.g-content{order:2;}
        >.icon{order:1;margin-right: 0.3em}

        &.icon-right{
            >.g-content{order: 1;}
            >.icon{order: 2;margin-left:0.3em;margin-right: 0;}
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>