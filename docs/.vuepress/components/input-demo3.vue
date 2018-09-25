<template>
    <div>
        <g-input value="不" error="姓名不得少于两个字"></g-input>
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