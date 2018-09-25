<template>
    <div class="gulu-wrapper" :class="positionClass">
        <div class="toast" ref="toast">
            <div class="message">
                <div v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 5,
                validator(value){
                    return value === false || typeof value === "number";
                }
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
                    }, this.autoClose * 1000)
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
    $toast-bg: rgb(121,189,143);
    @keyframes slide-up {
        0%{opacity: 0;transform: translateY(-100%)}
        100%{opacity: 1;transform: translateY(0%)}
    }
    @keyframes slide-down {
        0%{opacity: 0;transform: translateY(100%)}
        100%{opacity: 1;transform: translateY(0%)}
    }
    @keyframes fade-in {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    .gulu-wrapper{
        position: fixed;
        left: 50%;
        &.position-top{
            top: 0;
            transform: translateX(-50%);
            & > .toast{
                animation: slide-up 0.5s;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
            & > .toast{
                animation: slide-down 0.5s;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
        &.position-center{
            top: 50%;
            transform: translate(-50%,-50%);
            & > .toast{
                animation: fade-in 0.5s;
                border-radius: 4px;
            }
        }
    }
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        box-shadow: 0 0 5px 0 rgba(255, 97, 96, 0.50);
        padding: 0 16px;
        background: $toast-bg;
        display: flex;
        align-items: center;

        .message{
            padding: 4px 0;
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
    }
</style>