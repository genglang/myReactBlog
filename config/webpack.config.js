const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry: {
		app: path.join(__dirname, '../src/app.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_module')
				]
			}
		]
	},
	plugins: [
		new HTMLPlugin({
			template: path.join(__dirname, '../src/index.html')
		})
	]
}
if(isDev){
	config.devServer ={
		host: '127.0.0.1',
		port: '8888',
		contentBase:path.join(__dirname,'../dist'),
		// hot: true,
		overlay:{ // 错误弹窗
			errors:true // 只显示错误
		},
		publicPath: '', // 必须和output对应
		historyApiFallback:{
			index: './index.html' // 所有的404请求全部访问这
		}
	}
}
module.exports = config