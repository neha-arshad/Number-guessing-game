#! /usr/bin/env node
import inquirer from "inquirer";
import chalkanimation from "chalk-animation";
import chalk from "chalk";
const start = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function myWellcome() {
    let wellcome = chalkanimation.neon("Wellcome Number Guessing Game 🎲\n\n Guess a number between 1 to 6"); //start
    await start();
    wellcome.stop(); // stop after 1 sec
}
// call function
myWellcome();
// start game//
const guessNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt({
    name: "GuessNumber",
    type: "number",
    //message : "guess a number between 1 to 6"
});
if (answer.GuessNumber === guessNumber) {
    console.log(chalk.blueBright("Congratulations🎉 you guess right number"));
}
else {
    console.log(chalk.redBright("you loss the game 🥺\n\n Thanks for playing Number Guessing Game 👍"));
}
//AGAIN START//
async function againStart() {
    do {
        var again = await inquirer
            .prompt([
            { type: "input",
                name: "restart",
                message: "Do you want to continue? press y or n",
                choices: ["yes", "no"]
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
againStart();
