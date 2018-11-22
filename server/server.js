const express= require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const app = express()

app.get('*',(req,res)=>{
	const appStr = ReactSSR.renderToString(serverEntry)
	res.send(appStr)
})

app.listen(2333,()=>{
	console.log('server is listen on 2333')
})