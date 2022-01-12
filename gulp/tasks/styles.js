const gulp = require('gulp')
const gulpIf = require('gulp-if')
const gulpSourcemaps = require('gulp-sourcemaps')
const gulpStylus = require('gulp-stylus')
const gulpAutoprefixer = require('gulp-autoprefixer')
const gulpCsso = require('gulp-csso')
const stylus = require('stylus')
const browserSync = require('browser-sync')

const folders = require('../config/folders')
const { isProd } = require('../config/utils')

module.exports = () => {
	return gulp
		.src(folders.src.styles, { sourcemaps: !isProd() })
		.pipe(gulpIf(!isProd(), gulpSourcemaps.init()))
		.pipe(gulpStylus())
		.pipe(gulpAutoprefixer({ cascade: false, grid: true }))
		.pipe(gulpIf(isProd(), gulpCsso()))
		.pipe(gulpIf(!isProd(), gulpSourcemaps.write()))
		.pipe(gulp.dest(folders.dist.styles))
		.pipe(browserSync.stream())
}
