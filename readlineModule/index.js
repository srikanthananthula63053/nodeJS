const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({ input: stdin, output: stdout });

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`, (userInput) => {
    if (parseInt(userInput.trim()) === answer) {
        console.log('Correct!');
        rl.close();
    } else {
        rl.setPrompt('Incorrect, try again: ');
        rl.prompt();

        rl.on('line', (userInput) => {
            if (parseInt(userInput.trim()) === answer) {
                console.log('Correct!');
                rl.close();
            } else {
                rl.setPrompt(`Your answer "${userInput.trim()}" is incorrect, try again: `);
                rl.prompt();
            }
        });
    }
});
