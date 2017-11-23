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
更多详细配置在 gulpfile.js文件下查看

### 技术点
#### media query + rem实现移动端适配
gulp引入postcss的px2rem实现自动转换rem单位，编写media query修改不同宽度的根元素的 font-size的值
#### requestAnimationFrame 实现canvas不断重绘
requestAnimationFrame实现canvas不断重绘生成抖动的动画效果
<pre>
var move = function () {
    ctx.clearRect(0, 0, nWidth, nHeight);
    for(var i=0;i&ampn;i++){
            ball[i]['y']+=Math.random()*2-1;
            ball[i]['x']+=Math.random()*2-1;
        drawBall(ball[i]);
    }
    requestAnimationFrame(move);
}
</pre>


### 效果图

#### PC端效果
![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1flrt5omgi8j211y0hpwg4.jpg)
#### 移动端效果
![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1flrt5p94nrj208l0f9jru.jpg)


### 链接地址
www.duhonghui.top

