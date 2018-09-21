<template>
    <div class="toast">
        <slot></slot>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 20
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
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
        height: $toast-min-height;
        line-height: 1.8;
        box-shadow: 0 0 5px 0 rgba(255, 97, 96, 0.50);
        padding: 0 16px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: $toast-bg;
        display: flex;
        align-items: center;
        border-radius: 4px;

        .close {
            padding-left: 8px;
            margin-left: 8px;
            display: flex;
            align-items: center;
            height: 100%;
            border-left: 1px solid white;
            cursor: pointer;
        }

    }
</style>