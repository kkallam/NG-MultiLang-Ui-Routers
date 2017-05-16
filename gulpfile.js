'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');


var watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src('sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCss())
	.pipe(gulp.dest('dest-css/'))
	.pipe(browserSync.stream());

});


gulp.task('js', function(){
	return gulp.src(['js/**/*.js', '!gulpfile.js', '!services.js'])
	.pipe(minify())
	.pipe(uglify())
	.pipe(gulp.dest('dest-js/'));
});


gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});



gulp.task('build', [], function() {
  runSequence('js');
});


gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['js']);
	
})

gulp.task('default', ['build', 'watch', 'sass', 'js']);