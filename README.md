react移动端基础项目


[![license-badge.svg](https://img.shields.io/badge/license-NPL%20(The%20996%20Prohibited%20License)-blue.svg)](./LICENSE)

项目使用

            react redux react-router

            antd-mobile UI库

            sass axios

            eslint 语法检查器

            postcss remtopx 1:2 比例   10px:20px ->设计图 20px

```src 开发目录
    |-- assets 静态文件目录
    |-- component 公共- 组件存放目录
    |-- container 公共容器- 组件存放目录
    |-- api ajax请求目录
        |-- api.js 请求接口地址配置目录
        |-- reactRequest ajax请求中间层
    |-- store redux配置目录
        |-- action.js 公共action
        |-- reducer.js 公共redducer
        |-- rootReducer.js 多redux配置入口
        |-- createStore.js 创建redux
    |-- util 工具目录。
    |-- view 页面组件存放目录
        |-- component 页面自用组件目录
        |-- action.js 页面自用action
        |-- reducer.js 页面自用reducer.js
        |-- HomePage.js 页面组件
    |-- App.js App组件 顶级APP容器
    |-- index.js 项目根js文件 初始化 绑定dom
    |-- .env.local 配置文件
```
