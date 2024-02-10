// hello.js
const readline = require('readline');

const conversionFactor = 0.453592;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter weight in pounds: ', (pounds) => {
    const parsedPounds = parseFloat(pounds);

    if (!isNaN(parsedPounds)) {
        const kilograms = parsedPounds * conversionFactor;
        console.log(`${parsedPounds} pounds is approximately ${kilograms.toFixed(2)} kilograms`);
    } else {
        console.error('Please enter a valid weight in pounds.');
    }

    rl.close();
});
