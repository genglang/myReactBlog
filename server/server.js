const express= require('express')
const fs = require('fs')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const path =require('path')
const tplPath = path.join(__dirname,'../dist/index.html')
const template = fs.readFileSync(tplPath,'utf8') // 不指定utf8默认是buffer
const app = express()

app.use('/public',express.static(path.join(__dirname,'../dist'))) // 静态文件指定请求返回
app.get('*',(req,res)=>{
	const appStr = ReactSSR.renderToString(serverEntry)
	res.send(template.replace('<!--app-->', appStr))
})

app.listen(2333,()=>{
	console.log('server is listen on 2333')
})