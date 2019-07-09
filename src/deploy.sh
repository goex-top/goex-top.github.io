#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
# set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cp -r ./docs/.vuepress/dist/* ../
git pull https://github.com/go-ex/go-ex.github.io.git master
git add -A
git commit -m 'deploy'
git push -f https://github.com/go-ex/go-ex.github.io.git master
cd -