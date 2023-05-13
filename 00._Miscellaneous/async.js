/* 
Why do we have to use asynchronous? Because JS is single-threaded. And we don't want to stop or slow down the thread.

When to use:
Fetching over a network
Heavy calculations
Reading / Writing to files
Crypto functions (hashing, comparing)
Databases
*/

/*
Solution 1: Callbacks 
Con: callback hell


Solution 2: Promises

Two states:
- pending
- fulfilled
    - rejected
    - resolved

*/

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try{
//             resolve("resolved")

//         }catch{
//             reject("rejected");
//         }
//     },1)
// })
// .then(message => console.log(message)) // resolve
// .catch(error => console.log("Error message",error)); // reject

function celebrate() {
  return new Promise((resolve, reject) => {
    try {
      resolve("resolved");
    } catch {
      reject("rejected");
    }
  });
}

// celebrate()
//   .then((message) => console.log("success:", message))
//   .catch((error) => console.log(error));

function something() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("good");
      } catch (error) {
        reject("bad");
      }
    }, 200);
  });
}

// something()
// .then(message => console.log(message))

// IFEE to Immediately Invoke Function Expression
(async () => {
  const message = await something();
  console.log(message);
})();

// IFEE anonoymous function call
(() => {
  console.log("hello");
})();
