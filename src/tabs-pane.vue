<template>
    <div class="tabs-body-pane">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsBodyPane',
        inject:['eventBus'],
        props:{
            name:{
                type:String,
                require:true
            }
        },
        created(){
            this.eventBus.$on('update:selected',(data)=>{
                console.log('这是tabs pane得到的数据');
                console.log(data);
            })
        }
    }
</script>
<style lang="scss"></style>