
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his Country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!);
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”.

// Test data:
// Data 1: Test for bill values 275, 40 and 430.

// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300

// Bill above 50 and below 300
const firstBill = 275;

let tip = firstBill >= 50 && firstBill <= 300 ? firstBill * 0.15 :
firstBill * 0.2;

console.log(`The bill was ${firstBill}, the tip was ${tip}, and the total value ${firstBill + tip}.`);

// Bill below 50
const secondBill = 40;

tip = secondBill >= 50 && secondBill <= 300 ? secondBill * 0.15 :
secondBill * 0.2;

console.log(`The bill was ${secondBill}, the tip was ${tip}, and the total value ${secondBill + tip}.`);

// Bill above 300
const thirdBill = 430;

tip = thirdBill >= 50 && thirdBill <= 300 ? thirdBill * 0.15 :
thirdBill * 0.2;

console.log(`The bill was ${thirdBill}, the tip was ${tip}, and the total value ${thirdBill + tip}.`);