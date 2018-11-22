const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
module.exports={
	entry:{
		app:path.join(__dirname,'../src/app.js')
	},
	output:{
		filename: '[name].[hash].js',
		path:path.join(__dirname,'../dist'),
		publicPath: './'
	},
	module: {
		rules: [
			{
				test:/.(js|jsx)$/,
				loader: 'babel-loader',
				exclude:[
					path.join(__dirname,'../node_module')
				]
			}
		]
	},
	plugins: [
		new HTMLPlugin({
			template:path.join(__dirname,'../src/template')
		})
	]
}