## gulp自动化构建 个人主页

### 引入依赖
<pre>
var gulp = require('gulp'),
    scss = require('gulp-sass'),//scss->css
    uglify = require('gulp-uglify'),//js压缩
    minifyCss = require('gulp-minify-css'),//css压缩
    concat = require('gulp-concat'),//合并js文件
    imagemin = require('gulp-imagemin'),//图片压缩
    changed = require('gulp-changed'),//只打包修改的文件
    browserSync = require('browser-sync').create(),//构建本地服务器实现保存实时修改显示
    reload = browserSync.reload,
    postcss=require('gulp-postcss')//引入postcss
    px2rem=require('postcss-px2rem');//自动化 px -> rem，实现响应式布局
</pre>

### 链接地址
www.duhonghui.top/main/

