<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change',$event.target.value)"
            @input="$emit('input',$event.target.value)"
            @focus="$emit('focus',$event.target.value)"
            @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <g-icon  name="error" class="icon-error"></g-icon>
            <span class="errormessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export default {
        components: {
            'g-icon':Icon
        },
        name:'guluIput',
        props:{
            value:{
                type:String
            },
            disabled:{
                type: Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default: false
            },
            error:{
                type:String
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "var";
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        > :not(:last-child){margin-right:0.5em;}
        > input{
            height: $height;
            font-size: inherit;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            &:hover{border-color: $border-color-hover;}
            &:focus{box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
            &[disabled],&[readonly]{border-color: #bbb;color: #bbb;
                cursor: not-allowed;}
        }
        &.error{
            > input{border-color:$red;}
        }
        .icon-error{fill:$red;}
        .errormessage{color: $red;}
    }
</style>