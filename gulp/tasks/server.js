const browserSync = require('browser-sync')

const folders = require('../config/folders')

module.exports = done => {
	browserSync.init({
		server: {
			baseDir: folders.distFolder,
			index: 'catalog.html'
		},
		notify: false,
		port: 5000
	})
}
