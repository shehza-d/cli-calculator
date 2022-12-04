#!/usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
// import chalk from 'chalk';
// import chalk from 'chalk';

console.log("Shehzad Calculator")

const startFunction = async () => {
  const rainbow = chalkAnimation.rainbow("Let's start Calculating");
  //   setTimeout(() => {
  //     rainbow.stop();
  //   }, 2000);
  console.log(` _____________________
                |  _________________  |
                | | SHEHZAD      0. | |
                | |_________________| |
                |  ___ ___ ___   ___  |
                | | 7 | 8 | 9 | | + | |
                | |___|___|___| |___| |
                | | 4 | 5 | 6 | | - | |
                | |___|___|___| |___| |
                | | 1 | 2 | 3 | | x | |
                | |___|___|___| |___| |
                | | . | 0 | = | | / | |
                | |___|___|___| |___| |
                |_____________________|`);

  const answere = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operations do you want perform?\n",
      choices: ["Add", "Subract", "Multiply", "Divide"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter first Number = ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter second Number = ",
    },
  ]);
  //   console.log(answere);
  if (answere.operator === "Add") {
    console.log(
      chalk.green(
        `${answere.num1} + ${answere.num2} = ${answere.num1 + answere.num2}`
      )
    );
  } else if (answere.operator === "Subract") {
    console.log(
      chalk.red(
        `${answere.num1} - ${answere.num2} = ${answere.num1 - answere.num2}`
      )
    );
  } else if (answere.operator === "Multiply") {
    console.log(
      chalk.yellow(
        `${answere.num1} x ${answere.num2} = ${answere.num1 * answere.num2}`
      )
    );
  } else if (answere.operator === "Divide") {
    console.log(
      chalk.bgGreenBright(
        `${answere.num1} / ${answere.num2} = ${answere.num1 / answere.num2}`
      )
    );
  } else {
    console.log("ERROR");
  }
};
do {
  await startFunction();
  var restart = await inquirer.prompt({
    type: "input",
    name: "restart",
    message: "Do you want to restart? Yes or No",
  });
} while (
  restart.restart.toLowerCase() === "yes" ||
  restart.restart.toLowerCase() === "y"
);

// figlet("Shehzad", async(err, data) => {
//     if (err) {
//       console.log("Something went wrong...", err);
//       return;
//     }
//    await console.log(data);
//   });
