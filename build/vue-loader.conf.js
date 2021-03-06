var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	loaders: utils.cssLoaders({
		sourceMap: isProduction ?
			config.build.productionSourceMap :
			config.dev.cssSourceMap,
		extract: isProduction
	}),
	transformToRequire: {
		video: 'src',
		source: 'src',
		img: 'src',
		image: 'xlink:href'
	},
	postcss: [
		require('postcss-pxtorem')({
			rootValue: 37.5,
			unitPrecision: 3,
			minPixelValue: 3,
			propList: ['*'],
			selectorBlackList: ['html']
		})
	]
}