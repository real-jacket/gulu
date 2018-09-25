<template>
    <div>
        <g-input value="张三" disabled></g-input>
        <g-input value="李四" readonly></g-input>
        <g-input value="王五"></g-input>
    </div>
</template>
<script>
    import Input from '../../../src/input'
    export default {
        components:{
            'g-input':Input
        },
        data(){
            return {
                message:'你好'
            }
        }
    }
</script>