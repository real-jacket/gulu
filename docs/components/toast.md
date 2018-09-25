# 

## 常见弹窗

**预览**

<toast-demo1></toast-demo1>

**代码**

```html
<style>
    .wrapper{
        z-index: 30;
    }
</style>
<g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
<g-button @click="$toast('点击弹出提示',{position:'center'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示',{position:'bottom'})">底部弹出</g-button>
```

## 设置关闭按钮

**预览**

<toast-demo2></toast-demo2>

**代码**

```html
<style>
    .wrapper{
        z-index: 30;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>
```
```vue
methods: {
    onClickButton () {
        this.$toast('我在这儿呢！', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```

## 支持HTMl

**预览**

<toast-demo3></toast-demo3>

**代码**

```html
<style>
    .wrapper{
        z-index: 30;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>
```

```vue
methods: {
    onClickButton2 () {
        this.$toast('<span style="color: red">我在这儿呢！</span>', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```

