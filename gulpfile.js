//安装依赖
// npm install gulp-sass gulp-uglify gulp-minify-css gulp-concat gulp-imagemin browser-sync gulp-changed --save-dev

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),//只修改修改的文件
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    postcss=require('gulp-postcss')
    px2rem=require('postcss-px2rem')
    ;

var paths = {
    "src": {
        'sass': "./src/assets/css/*.scss",
        'js': './src/assets/js/*.js',
        'html': './src/*.html',
        'img': "./src/assets/img/*.{JPG,jpg,png,gif,svg}"
    },
    'dist': {
        'css': './dist/assets/css',
        'js': './dist/assets/js',
        'html': './dist',
        'img': './dist/assets/img'
    }
}

// 创建静态服务器,实现保存时自动更新 
gulp.task('browser-sync', ['changeScss', 'htmlclone'], function () {
    browserSync.init({
        server: {
            baseDir: paths.dist.html
        },
        port: 8085,
        reloadDelay: 0,
        directory: true
    })
    gulp.watch(paths.src.sass, ['changeScss']);
    gulp.watch(paths.dist.html).on('change', reload);
})
//监听src目录下的变化，并且reload
gulp.watch(paths.src.html, ['html-watch']);
gulp.task('html-watch', ['htmlclone'], reload);
gulp.watch(paths.src.js, ['js-watch']);
gulp.task('js-watch', ['concat'], reload);

//scss 转 css 再压缩
gulp.task('changeScss', function () {
    var cssSrc = paths.src.sass,
        cssDst = paths.dist.css;
    gulp.src(cssSrc)
        .pipe(changed(cssSrc, { extension: '.css' }))
        .pipe(scss())
        .pipe(postcss([px2rem({remUnit: 20})]))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDst))
        .pipe(reload({ stream: true }));
})

//html 拷贝 到 dist 目录
gulp.task('htmlclone', function () {
    return gulp.src(paths.src.html)
        .pipe(changed(paths.src.html, { extension: '.html' }))
        .pipe(gulp.dest(paths.dist.html))
        .pipe(reload({ stream: true }));
})

//合并js文件并压缩
gulp.task('concat', function () {
    return gulp.src(paths.src.js)
        .pipe(changed(paths.src.js, { extension: '.js' }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js))
        .pipe(reload({ stream: true }));
})

//压缩图片
gulp.task('imgMin', function () {
    gulp.src(paths.src.img)
        .pipe(changed(paths.src.img))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist.img))
        .pipe(reload({ stream: true }));
})

gulp.task('default', ['changeScss', 'htmlclone', 'concat', 'imgMin', 'browser-sync']);

