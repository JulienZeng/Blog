---
title: VuePress的搭建
date: 2022-1-22
sidebar: auto
tags:
 - Vue
 - Node
categories:
 - 学习记录
---

## 安装 `VuePress`

::: warning
前提条件:  
VuePress需要 Node.js 版本 >= 8.6
:::


1. 创建并进入一个新的目录
2. 使用`npm`或`yarn`进行初始化
``` sh
npm init #OR yarn init
```
3.将`VuePress`安装为本地依赖
::: warning
不推荐使用全局安装`VuePress`  
如果现有项目依赖了 `webpack 3.x`，推荐使用 [Yarn](https://classic.yarnpkg.com/lang/en/) 而不是 npm 来安装 `VuePress`。因为在这种情形下，npm 会生成错误的依赖树。
:::
``` sh
npm install -D vuepress #OR yarn add -D vuepress
```
4. 创建文件夹 `docs`
5. 在文件夹 `docs`内创建 `README.md`
::: warning
`VuePress`的路由默认访问文件夹下的`README.md`文件
:::
6. 在 `package.json` 中添加 [scripts](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts)
``` json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
7. 在本地启动服务器
``` sh
npm run dev #OR yarn dev
```
VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。

至此，`VuePress`的初步搭建已经完成。

## 进行 `VuePress` 的相关配置

### 配置文件 `config.js`
1. 在 `docs` 文件夹内创建 `.vuepress` 文件夹，建议使用命令行创建
``` sh
mkdir .vuepress
```
2. 在 `.vuepress` 文件夹内新建 `config.js`，写入配置如下：
``` js
// docs/.vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown：{
        lineNumbers: true
    }
}
```

### 导航栏
要使用导航栏，需要在 `config.js` 中进行下面的配置
``` js
// docs/.vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',   
    markdown：{
        lineNumbers: true
    },

    themeConfig:{
        //导航栏
        nav:[
            //一级导航
            { text:'首页', link:'/'},
            {
                text:'笔记', link:'/biji/',
                //二级导航（下拉菜单）
                items:[
                    { text:'笔记1', link:'/biji1/'},
                    { text:'笔记2', link:'/biji2/'}
                ]
            }
        ]
    }
}
```
::: warning
导航栏配置中的 `link` 后的每个值都需要一个文件夹,如：`link:'/biji'` 代表访问的文件为 `docs/biji/README.md`
:::

### 侧边栏
同样的，使用侧边栏也需要在 `config.js` 中进行相关的配置
``` js
// docs/.vuepress/config.js
// themeConfig:
sidebar:{
    '/':[
        {
            title:'侧边栏1',
            collapasable:true,
            //二级导航，可多加
            children:[
                '/biji/biji1/',
                '/biji/biji2/'
            ]
        },
        {
            title:'侧边栏2',
            collapasable:true,
            children:[
                '/biji/biji2/'
            ]
        },
    ]
}
```

### Markdown文档的首内容
首页的 `README.md`
```
---
home: true
heroImage: /logo.png
actionText:
actionLink:
features:
- title:
  details:
footer:
---
```
参数说明：  
`home` 是否首页  
`heroImage` 首页名字上的图标  
`actionText` 按钮显示的文字  
`actionLink` 点击按钮后链接到的地址  
`features` 一些介绍的信息  
`features -title` 介绍信息的题目  
`details` 介绍信息的内容  
`footer` 页面底部信息（如版权信息、备案信息）

### 静态资源配置
在 `docs/.vuepress/` 文件夹下创建 `public` 文件夹。  
一些直接访问的路径，如上一步中 `heroImage: /logo.png` 访问的路径即为 `docs/.vuepress/public/logo.png` 

至此，`VuePress`的初步配置基本完成。


## 参考资料
[VuePress中文文档](https://www.vuepress.cn/guide/)  
[1小时带你搭建vuepress高大上个人博客（极速上手版）](https://www.bilibili.com/video/BV17t41177cr)