#!usr/bin/env/ node
import figlet from 'figlet';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
// import chalk from 'chalk';
// import chalk from 'chalk';




console.log(`
_____________________
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
|_____________________|
`);
figlet("Shehzad", (err, data) => {
    if (err) {
        console.log('Something went wrong...',err);
        return;
    }
    console.log(data)
})