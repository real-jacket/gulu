<template>
    <div>
        <g-button>
            按钮
        </g-button>
        <g-button icon = "Setting">
            按钮
        </g-button>
        <g-button icon = "Setting" :loading="loading"  @click="loading = !loading">
            按钮
        </g-button>
    </div>
</template>
<script>
    import  Button from '../../../src/button'

    export default {
        components:{
            'g-button':Button
        },
        data(){
            return{
                loading:true
            }
        }
    }
</script>