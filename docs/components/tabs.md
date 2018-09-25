# Tabs切换

## 水平切换

**预览**

<tabs-demo ></tabs-demo>  

**代码**

```html
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
```
