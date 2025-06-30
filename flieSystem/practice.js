const fs=require('fs')

// fs.writeFile('example.txt','this an example',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file succesfully created")
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(file)
//             }
//         })
//     }
// })

// file rename

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('sucessfully change the name of the file')
//     }
// })

// insert data into file

// fs.appendFile('example2.txt','some data add to this file',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('succesfully add data to this fille')
//     }
// })

// file read
//  fs.readFile('example2.txt','utf8',(err,file)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(file)
//     }
//  })

// file delete

fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('sucessfully file delete')
    }
})