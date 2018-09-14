// 引入gulp
const gulp = require('gulp')
// 压缩html
const htmlmin = require('gulp-htmlmin')
//const config = require('./config') 
// 合并文件
const concat = require('gulp-concat')
// 热更新服务器
const connect = require('gulp-connect')
// 重命名
const rename = require('gulp-rename')
// 压缩css
const minifycss = require('gulp-minify-css')
// 编译sass
const sass = require('gulp-sass')
// 自动引入依赖文件
const inject = require('gulp-inject')
// 合并文件操作流
const merge = require('merge-stream')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')


gulp.task('css',function(){
	return gulp.src('./src/**/*.scss')
			.pipe(sass())
			.pipe(minifycss())
			.pipe(rename({suffix : '.min'}))
			.pipe(gulp.dest('dist'))
})
gulp.task('html',function(){
	return gulp.src('./src/**/*.html')
			.pipe(htmlmin())
	
			.pipe(rename({suffix : '.min'}))
			.pipe(gulp.dest('dist'))
})

gulp.task('js',function(){
	return gulp.src('./src/**/*.js')
			.pipe(uglify())
	
			.pipe(rename({suffix : '.min'}))
			.pipe(gulp.dest('dist'))
})
gulp.task('img',function(){
	return gulp.src('./img/**')
			.pipe(imagemin())
			.pipe(gulp.dest('image'))
})

gulp.task('watch',function(){
	gulp.watch('./src/views/**/*.html', ['html'])
    gulp.watch('./src/**/*.scss', ['css'])
    gulp.watch('./src/**/*.js', ['js'])
})

// 默认任务
gulp.task('default', ['html','css','js','watch'])