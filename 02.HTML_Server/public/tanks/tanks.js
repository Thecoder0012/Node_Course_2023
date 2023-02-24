
fetch("/api/tanks")
.then(response => response.json())
.then(result => {
    const div = document.querySelector(".tanks-wrapper");
    result.data.forEach(tank => {
       const tankDiv = document.createElement("div");

       const tankName = document.createElement("p");
       tankName.innerText = tank.name;

       const tankAge = document.createElement("p");
       tankAge.innerText = tank.age || "No age";

       tankDiv.appendChild(tankName);
       tankDiv.appendChild(tankAge);

       const breakLine = document.createElement("br");
       div.appendChild(breakLine);
       div.appendChild(tankDiv);
    });
    
});


// async function getTanks(){
// const res = await fetch("http://localhost:8080/api/tanks");
// const result = await res.json();

// const tank = document.querySelector(".tanks-wrapper");
// let html = '';
// result.data.forEach((tank) => {
//   html += `<tr> 
//             <td> ${tank.name} </td>   
//             <td> ${tank.age} </td>    
//             </tr>`;
// });
// tank.innerHTML = html;
// }

// getTanks();

