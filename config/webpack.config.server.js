const path = require('path')

module.exports={
	target: 'node', // webpack打包出来的内容使用在node环境下
	entry:{
		app:path.join(__dirname,'../src/server.entry.js')
	},
	output:{
		filename: 'server-entry.js', // node端没有浏览器缓存的概念,并且需要在node中直接import
		path:path.join(__dirname,'../dist'), // 打包好的输出路径
		publicPath: './',
		libraryTarget: 'commonjs2' // 打包出来的模块方案
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
}