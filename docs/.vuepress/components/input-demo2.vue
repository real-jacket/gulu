<template>
    <div>
        <g-input v-model="message"></g-input>
        <p>{{message}}</p>
        <button @click="message+=1">+1</button>
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