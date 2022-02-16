const browserSync = require('browser-sync')

const folders = require('../config/folders')

module.exports = () => {
	browserSync.init({
		server: {
			baseDir: folders.distFolder,
			index: 'main.html'
		},
		notify: false,
		port: 5000
	})
}
