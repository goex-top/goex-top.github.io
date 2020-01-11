# GoEx

开源项目[GoEx](https://github.com/nntaoli-project/GoEx) 文档

## 文档目录

`docs` 文件夹下是网站源码，依赖于[vuepress](https://vuepress.vuejs.org/zh/).

## 调试

安装依赖库
`npm install`
开始查看本地运行状态
`npm run docs:dev`
生成静态的 HTML 文件
`npm run docs:build`

### 编辑或新建网页

在`docs`, 编辑每个 markdown 文件。或新建.md 文件

## 手动发布

* 生成静态文件后，将`docs/.vuepress/dist`目录下所有文件拷贝至`master`分支的根目录下
* 或 `npm run docs:deploy`

## 自动发布

`travis-cli`根据`.travis.yml`配置文件自动发布至`master`分支下
