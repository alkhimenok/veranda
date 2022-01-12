const gulp = require('gulp')

const folders = require('../config/folders')

module.exports = () => gulp.src(folders.src.assets).pipe(gulp.dest(folders.dist.assets))
