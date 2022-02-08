// A rock paper scissors game in node.js console
import readline from "readline";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
console.log(chalk.cyanBright.italic.bold("enter after the animation has stopped"));

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const list = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * list.length);
const computerChoice = list[randomIndex];
let text = chalkAnimation.rainbow('Enter your choice: ');



setTimeout(() => {
    text.stop(); 
}, 2000);

rl.question(text, (answer) => {
    const userChoice = answer.toLowerCase();
    if (userChoice === computerChoice) {
        console.log(chalk.bold('Tie!'));
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log(chalk.bold.red('🍎 You lose! Paper beats rock.'));
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log(chalk.bold.green('🍏 You win! Rock beats scissors.'));
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log(chalk.bold.green('🍏 You win! Paper beats rock.'));
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log(chalk.bold.red('🍎 You lose! Scissors beats paper.'));
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log(chalk.bold.red('🍎 You lose! Rock beats scissors.'));
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log(chalk.bold.green('🍏 You win! Scissors beats paper.'));
    } else {
        console.log(chalk.red.bold('Invalid choice.💀'));
    }
    rl.close();
});