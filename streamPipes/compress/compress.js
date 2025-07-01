const fs = require('fs')
const zip = require('zlib')
const gzip = zip.createGzip()
const readStream = fs.createReadStream('ex.txt', 'utf8')
const writeStream = fs.createWriteStream('ex2.txt.gz')
readStream.pipe(gzip).pipe(writeStream)


