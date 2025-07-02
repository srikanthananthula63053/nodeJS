
//connecting html file

const fs = require('fs')
const htpp = require('http')
htpp.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, { 'content-type': 'text/html' })
    readStream.pipe(res)
}).listen('3000')


//connecting image file

const fs = require('fs')
const htpp = require('http')
htpp.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/image.png')
    res.writeHead(200, { "content-type": "image/png" })
    readStream.pipe(res)
}).listen('3000')


// connceting json file

const fs=require('fs')
const http=require('http')
http.createServer((req,res)=>{
const readStream=fs.createReadStream('./static/example.json')
res.writeHead(200,{'content-type':'application/json'})
readStream.pipe(res)
}).listen('3000')