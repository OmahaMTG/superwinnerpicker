var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

var config = {
	distDir: './dist/vendor'
}

gulp.task('bower', function(){
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest(config.distDir))
})