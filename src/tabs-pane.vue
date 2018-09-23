<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsPane',
        inject:['eventBus'],
        data(){
          return {
              active:false
          }
        },
        props:{
            name:{
                type:String|Number,
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

    }
</script>
<style lang="scss">
    .tabs-pane{
        padding-top: 10px;
    }
</style>