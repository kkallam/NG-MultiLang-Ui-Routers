var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src('sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/'));

});

//gulp.watch('sass/**/*.scss', ['sass']);
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	
})

gulp.task('default', ['watch', 'sass']);