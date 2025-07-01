//compress file

// const fs = require('fs')
// const zip = require('zlib')
// const gzip = zip.createGzip()
// const readStream = fs.createReadStream('ex.txt', 'utf8')
// const writeStream = fs.createWriteStream('ex2.txt.gz')
// readStream.pipe(gzip).pipe(writeStream)

 //uncompress file 

 const fs = require('fs')
 const unzip=require('zlib')
 const gunzip=unzip.createGunzip()
 const readStream=fs.createReadStream('ex2.txt.gz')
 const writeStream=fs.createWriteStream('uncompres.txt.gz')
 readStream.pipe(gunzip).pipe(writeStream)

