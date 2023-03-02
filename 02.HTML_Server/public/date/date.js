// const textcont = document.querySelector(".text-container");
// let text;
// function getText() {
//   let dateValue = document.querySelector(".date-input").value;
//   let dateObj = new Date(dateValue);
//   let dateFormatted = new Date(dateValue).toLocaleDateString("dk");
//   let values = dateFormatted.split(".");
//   let year = parseInt(values[2]);

//   if (
//     (year % 4 === 0 && year % 100 !== 0) ||
//     year % 400 == 0 ||
//     (year % 100 === 0 && year % 400 !== 0)
//   ) {
//     text = document.createElement("h1");
//     text.innerText = `${dateObj.getFullYear()} is a leap year`;
//     textcont.appendChild(text);
//     return;
//   } else {
//     text = document.createElement("h1");
//     text.innerText = `${dateObj.getFullYear()} is not a leap year`;
//     textcont.appendChild(text);
//     return;
//   }
// }
