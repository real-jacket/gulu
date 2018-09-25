# 布局

## 常见三栏布局

**预览**

<layout-demo1></layout-demo1>

**代码**

```html
<g-header>header</g-header>
<g-content>content</g-content>
<g-footer>footer</g-footer>
```

## 侧边栏布局

**预览**

<layout-demo2></layout-demo2>

**代码**

```html
<g-layout>
    <g-sider>sider</g-sider>
    <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
    </g-layout>
</g-layout>
```

## 内部侧边栏

**预览**

<layout-demo3></layout-demo3>

**代码**

```html
<g-layout>
    <g-header>header</g-header>
    <g-layout>
        <g-sider>sider</g-sider>
        <g-content>content</g-content>
    </g-layout>
    <g-footer>footer</g-footer>
</g-layout>
```

