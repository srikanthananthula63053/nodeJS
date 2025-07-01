const fs = require('fs')
const readStream = fs.createReadStream('example.txt', 'utf8')
readStream.on('data', (chunk) => {
    console.log(chunk)
})

// copy the same file

const writeStream = fs.createWriteStream('example2.txt')
readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})