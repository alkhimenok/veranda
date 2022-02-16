const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../../webpack.config.js')
const browserSync = require('browser-sync')

const folders = require('../config/folders')

module.exports = () => {
	return gulp
		.src(folders.src.scripts)
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(gulp.dest(folders.dist.scripts))
		.pipe(browserSync.stream())
}
