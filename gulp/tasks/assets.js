const gulp = require('gulp')

const folders = require('../config/folders')

module.exports = () => {
	return gulp.src(folders.src.assets).pipe(gulp.dest(folders.dist.assets))
}
