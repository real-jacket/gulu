<template>
    <div class="tabs-box">
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-nav>
                <g-tabs-item name="A">TabsA</g-tabs-item>
                <g-tabs-item name="B">TabsB</g-tabs-item>
                <g-tabs-item name="C">TabsC</g-tabs-item>
                <template slot="action">
                    <button>设置</button>
                </template>
            </g-tabs-nav>
            <g-tabs-body>
                <g-tabs-pane name="A">TabsA的相关内容</g-tabs-pane>
                <g-tabs-pane name="B">TabsB的相关内容</g-tabs-pane>
                <g-tabs-pane name="C">TabsC的相关内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>
<script>
    import Tabs from '../../../src/tabs'
    import Tabsnav from '../../../src/tabs-nav'
    import TabsItem from '../../../src/tabs-item'
    import TabsBody from '../../../src/tabs-body'
    import TabsPane from '../../../src/tabs-pane'
    export default {
        components:{
            'g-tabs': Tabs,
            'g-tabs-nav':Tabsnav,
            'g-tabs-item':TabsItem,
            'g-tabs-body':TabsBody,
            'g-tabs-pane':TabsPane
        },
        data(){
            return{
                selectedTab:'A'
            }
        }
    }
</script>
<style>
    .tabs-box{
        border: 1px solid rgb(240,240,240);
        height: 300px;
    }
</style>