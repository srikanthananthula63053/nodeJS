const fs=require('fs')

// folder create

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("sucessfully create a folder")
//     }
// })

// // folder remove 
 
// fs.rmdir('tutorial',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("sucessfully delete folder")
//     }
// })

// folder create with file

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         fs.writeFile("tutorial/example.txt","adding data",(err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("successfully create a file")
//             }
//         })
//     }
// })

// removing the file from the folder

fs.unlink('tutorial/example.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("sucessfully delete the file")
    }
})


// remove the folder

fs.rmdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("sucessfully deleting the folder")
    }
})