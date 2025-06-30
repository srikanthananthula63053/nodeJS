const { error } = require('console')
const fs = require('fs')

// creating the file

fs.writeFile('example.txt', 'this an example', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("sucessfully created the file")
        
    }
})
fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err)
            } else {
                console.log(file)
            }
        })


// rename the file 

fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('sucessfully rename the file')
    }
})


// appened file (adding text into the file)

fs.appendFile('example2.txt','  some data being append',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successfully data append')
    }
})

//file deleting

fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successfully delete the file")
    }
})