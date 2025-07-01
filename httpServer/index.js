//without path

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('hello world I am here');
//     res.end();
// });

// server.listen('3000')


//with path

const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("hello world i am here")
        res.end()
    }else{
        res.write("you are using wrong domain")
        res.end()
    }
})

server.listen('3000')