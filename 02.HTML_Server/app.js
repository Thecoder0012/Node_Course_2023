/* eslint-disable semi */
const express = require('express');
const app = express();

app.use(express.static('public')); // express has a static folder named public

// const tanks = [
//   {name: "Leopard", age: 50},
//   {name: "Tiger"}  
// ];

const tanksUtility = require('./utilities/tanks.js');
console.log(tanksUtility.getTanks());
const {getTanks,addTank} = require("./utilities/tanks.js");
console.log(getTanks());


let visitorCount = 0;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/frontpage/index.html`);
});

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html');
});

app.get("/date", (req, res) => {
  res.sendFile(__dirname + "/public/date/date.html");
});

app.get("/guards", (req, res) => {
  res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
});

app.get('/api/tanks', (req,res) => {
  res.send({data: tanks})
})

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorCount }); // prefix updates eargerly.
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});


const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Port started on', PORT);
});
