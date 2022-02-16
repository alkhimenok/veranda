const distFolder = './client/dist'
const srcFolder = './client/src'
const templatesFolder = './templates'

module.exports = {
	src: {
		assets: `${srcFolder}/assets/**/*.*`,
		templates: `${templatesFolder}/*.pug`,
		styles: `${srcFolder}/index.styl`,
		scripts: `${srcFolder}/index.js`
	},
	dist: {
		assets: `${distFolder}/assets`,
		templates: distFolder,
		styles: distFolder,
		scripts: distFolder
	},
	watch: {
		assets: `${srcFolder}/assets/**/*.*`,
		templates: `${templatesFolder}/**/*.pug`,
		styles: `${srcFolder}/**/*.styl`,
		scripts: `${srcFolder}/**/*.ts`
	},
	clean: distFolder,
	distFolder,
	srcFolder
}
