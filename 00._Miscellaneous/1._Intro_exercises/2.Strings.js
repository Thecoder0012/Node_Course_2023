// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result_decimal = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
console.log(result_decimal.toFixed(2)); 


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3
console.log(average.toFixed(5));





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
let c = letters.charAt(2)
console.log(c);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replaceChar = fact.replace("j","J")
console.log(replaceChar);


// --------------------------------------


