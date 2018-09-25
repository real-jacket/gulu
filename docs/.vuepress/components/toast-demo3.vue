<template>
    <div>
        <g-button @click="onClickButton2" existHtml>上方弹出</g-button>
    </div>
</template>
<script>
    import Plugin from '../../../src/plugin'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(Plugin)

    export default {
        components:{
            'g-toast':Toast,
            'g-button':Button
        },
        methods: {
            onClickButton1 () {
                this.$toast('我在这儿呢！', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            },
            onClickButton2 () {
                this.$toast('<span style="color: red">我在这儿呢！</span>', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        }
    }

</script>
<style>
    .gulu-wrapper{
        z-index: 30;
    }
</style>