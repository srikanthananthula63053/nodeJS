const { stdin, stdout } = require('process')

const readline = require('readline')
const rl = readline.createInterface({ input: stdin, output: stdout })

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 + num2

rl.question(`what is the value of ${num1} + ${num2} ? \n`, (userInput) => {
    if (parseInt(userInput.trim()) === answer) {
        console.log("correct")
        rl.close()
    } else {
        rl.setPrompt(" answer is inncorect")
        rl.prompt()

        rl.on('line', (userInput) => {
            if(userInput===answer){
                console.log("correct")
                rl.close()
            }else{
            rl.setPrompt(`your ${userInput} incorrect try again`)
            rl.prompt()
            }
        })
    }

})