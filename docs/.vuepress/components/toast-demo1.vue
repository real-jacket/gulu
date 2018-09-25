<template>
    <div>
        <g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
        <g-button @click="$toast('点击弹出提示',{position:'center'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示',{position:'bottom'})">底部弹出</g-button>
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
        data(){
            return {
                code1:`
<style>
    .wrapper{
        z-index: 30;
    }
</style>
<g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
<g-button @click="$toast('点击弹出提示',{position:'center'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示',{position:'bottom'})">底部弹出</g-button>

                `.trim(),
                code2:`
<style>
    .wrapper{
        z-index: 30;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>

methods: {
    onClickButton () {
        this.$toast('我在这儿呢！', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
                `.trim(),
                code3: `
                <style>
    .wrapper{
        z-index: 30;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>

methods: {
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
                `.trim()
            }
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