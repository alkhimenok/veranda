const gulp = require('gulp')

const folders = require('./gulp/config/folders')

const clean = require('./gulp/tasks/clean')
const assets = require('./gulp/tasks/assets')
const templates = require('./gulp/tasks/templates')
const styles = require('./gulp/tasks/styles')
const scripts = require('./gulp/tasks/scripts')
const server = require('./gulp/tasks/server')

const watcher = () => {
	gulp.watch(folders.watch.assets, assets)
	gulp.watch(folders.watch.templates, templates)
  gulp.watch(folders.watch.styles, styles)
	gulp.watch(folders.watch.scripts, scripts)
}

const dev = gulp.series(clean, gulp.parallel(assets, templates, styles, scripts), gulp.parallel(watcher, server))
const prod = gulp.series(clean, gulp.parallel(assets, templates, styles, scripts))

gulp.task('prod', prod)
gulp.task('dev', dev)
gulp.task('default', dev)
