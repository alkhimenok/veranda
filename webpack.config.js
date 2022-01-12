const path = require('path')

const { isProd } = require('./gulp/config/utils')

const getMode = () => (isProd() ? 'production' : 'development')
const getDevtool = () => (isProd() ? false : 'source-map')

module.exports = {
	context: path.resolve(__dirname, 'client', 'src'),
	entry: './index.ts',
	mode: getMode(),
	devtool: getDevtool(),
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: { extensions: ['.ts', '.js'] },
	output: { path: path.resolve(__dirname, 'client', 'dist'), filename: 'index.js', }
}
