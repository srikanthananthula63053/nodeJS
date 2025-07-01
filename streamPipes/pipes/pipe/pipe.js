const fs = require('fs')
const readStream = fs.createReadStream('ex.txt', 'utf8')
const writeStream = fs.createWriteStream('ex2.txt')
readStream.pipe(writeStream)