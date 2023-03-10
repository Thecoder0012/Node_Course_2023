
setTimeout(() => {
  window.location.replace("/visitors");
}, 3000);

// fetch("/api/tanks")
//   .then((response) => {return response.json()})
//   .then((res) => {
//     const div = document.querySelector(".tanks-wrapper");
//     res.forEach((tank) => {
//         console.log(tank);
//       const tankDiv = document.createElement("div");

//       const tankName = document.createElement("p");
//       tankName.innerText = tank.name;

//       const tankAge = document.createElement("p");
//       tankAge.innerText = tank.age || "No age";

//       tankDiv.appendChild(tankName);
//       tankDiv.appendChild(tankAge);

//       const breakLine = document.createElement("br");
//       div.appendChild(breakLine);
//       div.appendChild(tankDiv);
//     });
//   });

async function getTanks() {
  const res = await fetch("/api/tanks");
  const result = await res.json();
  const tankDiv = document.querySelector(".tanks-wrapper");
  let html = "";
  console.log(result);
  result.data.forEach((tank) => {
    html += `<tr>
            <td> ${tank.name} </td>
            <td> ${tank.age} </td>
            </tr>`;
  });
  tankDiv.innerHTML = html;
}

getTanks();
