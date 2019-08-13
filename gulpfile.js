//引入gulp
var gulp = require('gulp');
//这样的话 其他的模块可以直接使用 $ 符号来引入
var $ = require('gulp-load-plugins')();
var open = require('open');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

//定义目录路径
var app = {
    //源代码，文件目录
    srcPath: 'src/',
    //文件整合之后的目录
    devPath: 'build/',
    //项目，发布目录上产部署
    prdPath: 'dist/'
};

//通过第三方安装的插件，需要拷贝到 devPath prdPath中
gulp.task('bower', function () {
    // 读取这个文件夹下边的所有的文件或者文件夹
    gulp.src('bower_components/**/*')
        //读取完整后进行操作  西安拷贝到整合目录 并重命名，在拷贝到生产目录并重命名
        .pipe(gulp.dest(app.srcPath + 'vendor'))
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload()); //文件更改后自动变异 并执行启动服务重新打开浏览器
});


//将 html 拷贝到 devPath prdPath中
gulp.task('html', function () {
    //子级的文件名和文件都不变,等同于复制
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());
});


//将 php 拷贝到 devPath prdPath中
gulp.task('php', function () {
    gulp.src(app.srcPath + '*.php')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());
});

//将 模拟的json 文件 拷贝到 devPath prdPath中
gulp.task('json', function () {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload());
});

//将 index.less 文件 拷贝到 devPath prdPath中，index.less引入了所有的其他的less
gulp.task('less', function () {
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload());
});

// 拷贝 js 文件  将所有的源文件中的js 文件整合成index.js 然后拷贝过去
gulp.task('script', function () {
    gulp.src(app.srcPath + 'script/**/*.js')
        // .pipe($.concat('index.js'))  不需要合并
        .pipe(gulp.dest(app.devPath + 'js'))
        // .pipe($.uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload());
});

//拷贝 压缩 图片 最后放到发布目录下
gulp.task('image', function () {
    gulp.src(app.srcPath + 'image/**/*')
        //江源图片放到整合目录下，在压缩放到生产目录下
        .pipe(gulp.dest(app.devPath + 'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'image'))
        .pipe($.connect.reload());
});


//清除旧文件，每次更新的时候
gulp.task('clean', function () {
    gulp.src([app.devPath, app.prdPath])
        .pipe($.clean());
})

//监听任务
gulp.task('watch', function () {
    //监听script
    gulp.watch(app.srcPath + 'script/**/*.js', ['script']);
    //监听html
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    //监听json
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    //监听less
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    //监听image
    gulp.watch(app.srcPath + 'image/**/*', ['image']);
    //监听bower_components
    gulp.watch('bower_components/**/*', ['bower']);
    //监听php
    gulp.watch(app.srcPath + '*.php', ['php']);
})

//总的方法
gulp.task('build', ['bower', 'image', 'script', 'less', 'json', 'html', 'php', 'watch']);



//编写服务
gulp.task('serve', ['build'], function () {
    $.connect.server({
        //服务起来的入口,开发
        root: [app.prdPath],
        //文件更改后自动刷新页面
        livereload: true,
        //端口号
        port: 1234
    });
    // 在 命令工具中执行 gulp serve  就相当于是启动了服务
    //自动打开浏览器
    open('http://localhost:1234');
    //我们希望更改了文件，就自动编译，并且打包等然后打开浏览器
    // gulp.watch('bower_components/**/*' , ['bower_components']);
    //监听 script 下边的 js 文件，并执行 script 方法   
    //这样文件变更了就会自动构建
    gulp.watch(app.srcPath + 'script/**/*.js', ['script']);
    //监听html
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    //监听json
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    //监听less
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    //监听image
    gulp.watch(app.srcPath + 'image/**/*', ['image']);
    //监听bower_components
    gulp.watch('bower_components/**/*', ['bower']);
});


//默认执行的任务，直接 执行 gulp 变行了。都编写完成后再终端 执行 gulp 便可以了。
gulp.task('default', ['serve']);