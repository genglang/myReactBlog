const path = require('path')
module.exports={
	entry:{
		app:path.join(__dirname,'../src/app.js')
	},
	output:{
		filename: '[name].hash.js',
		path:path.join(__dirname,'../dist'),
		publicPath: '/public'
	}
}