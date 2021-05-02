#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist
echo '# 博客与demo' > README.md

# deploy to github pages
# echo 'lacorda.github.io' > CNAME

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:Lacorda/lacorda.github.io.git master # 推送到github gh-pages分支

cd -
rm -rf dist