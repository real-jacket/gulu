# gulu 一个Vue UI框架

[![Build Status](https://travis-ci.org/real-jacket/gulu.svg?branch=master)](https://travis-ci.org/real-jacket/gulu)

## 介绍

这是我学习 Vue 过程中做的的一个 UI 框架。

##开始使用

1. 添加css
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizeing:border-box}
    ```
    IE 8 及以上浏览器均支持此样式
    
    你还需要设置默认颜色等变量（后续将改为 SCSS 变量）
    ```
    :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE 15 以上浏览器均支持此样式

2. 安装gulu
    ```
    npm i --save gulu-k
    ```
3. 引入 gulu
    ```
    import {Button,ButtonGroup,Icon} from 'gulu-k'
    import 'gulu-k/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        'g-button':Button,
        'g-icon':Icon
      }
    }
    ```
4. 引入 svg symbols
    在页面中应引入 icon-font
    ```
    <script src="//at.alicdn.com/t/font_839276_6x4lbicja9.js"></script>
    ```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码