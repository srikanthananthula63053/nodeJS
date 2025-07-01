
// pipes

// const fs=require('fs')
// const readStream=fs.createReadStream('ex.txt',"utf8")
// const writrStream=fs.createWriteStream('ex2.txt')
// readStream.pipe(writrStream)

// compress
//  const fs=require('fs')
//  const zip=require('zlib')
//  const gzip=zip.createGzip()
//  const readStream=fs.createReadStream('ex.txt')
//  const writrStream=fs.createWriteStream('ex2.txt.gz')
//  readStream.pipe(gzip).pipe(writrStream)



 // uncompress 

// to uncompress file first of all we need compress file

//  const fs=require('fs')
//  const zip=require('zlib')
//  const gzip=zip.createGzip()
//  const readStream=fs.createReadStream('ex.txt')
//  const writrStream=fs.createWriteStream('ex2.txt.gz')
//  readStream.pipe(gzip).pipe(writrStream)

const fs=require('fs')
 const zip=require('zlib')
 const gzip=zip.createGzip()
 const readStream=fs.createReadStream('ex2.txt.gz')
 const writrStream=fs.createWriteStream('uncompress.txt.gz')
 readStream.pipe(gzip).pipe(writrStream)
