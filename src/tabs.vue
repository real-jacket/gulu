<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuluTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type: String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if (vm.$options.name === 'GuluTabsNav') {
                    vm.$children.forEach((childvm)=>{
                        if (childvm.name === this.selected
                        &&childvm.$options.name === 'GuluTabsItem'){
                            this.eventBus.$emit('update:selected',this.selected,childvm)
                        }
                    })
                }
            });

        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
          return {
              eventBus:this.eventBus
          }
        },
        created(){
        }
    }
</script>
<style lang="scss">
    .tabs{
        padding: 1em;
    }
</style>