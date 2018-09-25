<template>
    <div class="layout-box">
        <g-layout>
            <g-header>header</g-header>
            <g-layout>
                <g-sider>sider</g-sider>
                <g-content>content</g-content>
            </g-layout>
            <g-footer>footer</g-footer>
        </g-layout>
    </div>
</template>
<script>
    import Layput from '../../../src/layout'
    import Sider from '../../../src/sider'
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    export default {
        components:{
            'g-layout': Layput,
            'g-header': Header,
            'g-sider': Sider,
            'g-content': Content,
            'g-footer': Footer,
        }
    }
</script>
<style>
    .layout-box{
        height: 400px;
        display: flex;
        overflow: hidden;
    }
</style>