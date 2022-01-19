const browserSync = require('browser-sync')

const folders = require('../config/folders')

module.exports = done => {
	browserSync.init({
		server: {
			baseDir: folders.distFolder,
			index: 'basket.html'
		},
		notify: false,
		port: 5000
	})
}
