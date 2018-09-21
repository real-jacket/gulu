<template>
    <div class="toast" ref="toast" :class="positionClass">
        <div class="message">
            <div v-if="existHtml" v-html="$slots.default[0]"></div>
            <slot v-else></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: false
            },
            autoCloseDelay: {
                type: Number,
                default: 200
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            existHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return  ['top','bottom','center'].indexOf(value) >= 0
                }
            }
        },
        created(){

        },
        mounted() {
            this.execAutoClose();
            this.updateStyle();
        },
        computed:{
          positionClass(){
              return {
                  [`position-${this.position}`]:true
              }
          }
        },
        methods: {
            execAutoClose(){
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log(){
                console.log('测试');
            },
            onClickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this);
                }

            }
        }
    }
</script>
<style lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(121, 189, 143, 0.6);
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        box-shadow: 0 0 5px 0 rgba(255, 97, 96, 0.50);
        padding: 0 16px;
        position: fixed;
        background: $toast-bg;
        display: flex;
        align-items: center;
        border-radius: 4px;

        .message{
            padding: 10px 0;
        }
        .close {
            height: 100%;
            cursor: pointer;
            flex-shrink: 0;
            padding-left: 10px;
        }
        .line{
            margin-left: 10px;
            border-left: 1px solid white;
        }
        &.position-top{
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &.position-center{
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>