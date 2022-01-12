const gulp = require('gulp')
const gulpPug = require('gulp-pug')
const browserSync = require('browser-sync')

const folders = require('../config/folders')
const { isProd } = require('../config/utils')

module.exports = () => {
	return gulp
		.src(folders.src.templates)
		.pipe(gulpPug({ pretty: !isProd() }))
		.pipe(gulp.dest(folders.dist.templates))
		.pipe(browserSync.stream())
}
