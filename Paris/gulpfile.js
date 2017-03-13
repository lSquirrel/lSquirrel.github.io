var gulp = require('gulp');
var scss = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var imagemin=require('gulp-imagemin');

//CSS
gulp.task('style',function(){
	gulp.src(['src/css/*.scss','!src/css/_*.scss'])
	    .pipe(scss())
	    .pipe(autoprefixer({
	      	  browsers: ['Android 2.3',
		      'Android >= 4',
		      'Chrome >= 20',
		      'Firefox >= 24', // Firefox 24 is the latest ESR 
		      'Explorer >= 8',
		      'iOS >= 6',
		      'Opera >= 12',
		      'Safari >= 6'],
	           cascade: false
	    }))
	    .pipe(csscomb())
	    .pipe(uglifycss())
	    .pipe(gulp.dest('dest/css'))
});

//JS
gulp.task('script',function(){
	gulp.src(['src/js/*.js','!src/js/_*.js'])
//	    .pipe(concat('main.js'))
	    .pipe(uglyfly())
	    .pipe(gulp.dest('dest/js'))
});

//html
gulp.task('html',function(){
	gulp.src('src/*.html')
	    .pipe(htmlmin({
	    	collapseWhitespace: true,
      		removeComments: true
	    }))
	    .pipe(gulp.dest('dest'))
});

//图片压缩
gulp.task('image',function(){
	gulp.src('src/img/*/*.*')
	.pipe(imagemin())       
	.pipe(gulp.dest('dest/img'))
});

//热更新
var reload = browserSync.reload;
gulp.task('server',function(){
    browserSync.init({
        server: {
            baseDir: "./dest/"
        }
    });
    gulp.watch('src/*.html',['html']).on('change',reload);
    gulp.watch('src/css/*.less',['style']).on('change',reload);
    gulp.watch('src/js/*.js',['script']).on('change',reload);
    gulp.watch('src/img/*.*',['image']).on('change',reload);
});
