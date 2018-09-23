<template>
    <div class="tabs-nav-item" @click="yyy">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNavItem',
        inject:['eventBus'],
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type: String,
                require:true
            }
        },
        created(){
            this.eventBus.$on('update:selected',(data)=>{
                console.log('这是tabs item得到的数据');
                console.log(data);
            })
        },
        methods:{
            yyy(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss"></style>