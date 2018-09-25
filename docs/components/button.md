# 按钮

## 常见组合

**预览**

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

**代码**

```html
<g-button>按钮</g-button>
<g-button icon="Setting">按钮</g-button>
<g-button icon="Setting" :loading="loading" @click="loading=!loading">按钮</g-button>
```

## 按钮组合

**预览**

<ClientOnly>
<buttongroup-demo></buttongroup-demo>
</ClientOnly>

**代码**

```html
<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```