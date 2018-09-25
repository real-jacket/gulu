import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-sider',Sider);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);
Vue.component('g-toast',Toast);
Vue.use(Plugin);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-nav',TabsNav);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-pane',TabsPane);



new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'hi',
        selectedTab:'wx'
    },
    created(){

    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        },
        showTop(){
            this.showToast('top')
        },
        showCenter(){
            this.showToast('center')
        },
        showBottom(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`<p style="color: red">弹出消息：这是第${parseInt(Math.random()*10)}条message</p>`, {
                position,
                autoClose: 3 ,
                closeButton:{
                    text:'知道了',
                    callback(toast){
                        toast.log();
                        console.log('用户表示知道了');
                    }
                },
                existHtml: true
            })
        }
    }
});