# 输入框

## 常见状态

**预览**

<input-demo1></input-demo1>

**代码**

```html
<g-input value="张三" disabled></g-input>
<g-input value="李四" readonly></g-input>
<g-input value="王五"></g-input>
```

## 双向绑定

**预览**

<input-demo2></input-demo2>

**代码**

```html
<g-input v-model="message"></g-input>
<p>{{message}}</p>
<button @click="message+=1">+1</button>
```

## 错误提示

**预览**

<input-demo3></input-demo3>

**代码**

```html
<g-input value="不" error="姓名不得少于两个字"></g-input>
```
