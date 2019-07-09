# GoEx 
GoEx文档

## 文档目录
```src/docs``` 文件夹下是网站源码，依赖于[vuepress](https://vuepress.vuejs.org/zh/).

## 调试
进入```src```目录
安装依赖库
```npm install```
开始查看本地运行状态
```npm run docs:dev```
生成静态的 HTML 文件
```npm run docs:build```

### 编辑或新建网页
在```src/docs```, 编辑每个markdown文件。或新建.md文件

## 发布
生成静态文件后，将```src/docs/.vuepress/dist```目录下所有文件拷贝至根目录下
```npm run docs:build```
