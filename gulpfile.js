var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('buildStyles', function () {
	return gulp.src('./scss/style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});


// autoprefixer
gulp.task('autoprefixer', function () {
	return gulp.src('css/style.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('css'))
});
// Watch Task
gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', gulp.series('buildStyles'));
});
// Default Task
gulp.task('default', gulp.parallel('watch', 'buildStyles'));