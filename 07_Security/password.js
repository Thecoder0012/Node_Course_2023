import bcrypt from 'bcrypt';

// hashing function is a fixed output. You can't go back from the output to the input.

const passwordText = "hello1234";
const passwordText2 = "blabla00";
const hashedPassword =  "$2b$14$isg9K5OgtbMI9YacFo7A1ucg6q8sIlZLjzQ0sl7uoB.Ekee2rmwQO";

// 12 rounds and has to be async or it just blocks the server
const encryptedPass = await bcrypt.hash(passwordText, 14); // returns a promise
console.log(encryptedPass);

const comparingPass = await bcrypt.compare(passwordText,hashedPassword);
console.log(comparingPass);