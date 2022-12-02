// import chalk from 'chalk';
import figlet from 'figlet';
figlet("Shehzad", (err, data) => {
    if (err) {
        console.log('Something went wrong...', err);
        return;
    }
    console.log(data);
});
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
