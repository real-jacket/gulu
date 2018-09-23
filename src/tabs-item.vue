<template>
    <div class="tabs-item" @click="selected" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsNavItem',
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type: String|Number,
                require:true
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                return this.active = this.name === name;
            })
        },
        methods:{
            selected(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style scoped lang="scss">
    .tabs-item{
        padding: 0 1em;
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        &.active{
            background: red;
        }
    }
</style>