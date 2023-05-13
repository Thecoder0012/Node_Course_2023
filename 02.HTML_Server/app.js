/* eslint-disable semi */
import express from 'express';
const app = express();

import guardsRouter from './routers/guardsRouter.js';
import tanksRouter from "./routers/tanksRouter.js";
import visitorsRouter from "./routers/tanksRouter.js";



app.use(express.static("public")); // express has a static folder named public
app.use([guardsRouter,tanksRouter,visitorsRouter]);

// const tanks = [
//   {name: "Leopard", age: 50},
//   {name: "Tiger"}
// ];

// const tanksUtility = require('./utilities/tanks.js');
// console.log(tanksUtility.getTanks());
// import { getTanks, addTank } from "./utilities/tanks.js";

let visitorCount = 0;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/frontpage/index.html`);
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/date", (req, res) => {
  res.sendFile(__dirname + "/public/date/date.html");
});

app.get("/guards", (req, res) => {
  res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
});

app.get("/proxy", (req,res) => {
  fetch("https://www.google.com")
  .then(response => response.text())
  .then(result => res.send(result))
})

app.get("/api/tanks", (req, res) => {
  res.send({ data: getTanks() });
});

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorCount }); // prefix updates eargerly.
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/api/guards", (req, res) => {
  // query string or path variable to send data with a get request.

  const query = req.query;
  if(query.pass === "secret"){
    return res.redirect("/api/tanks"); // return stop the execution here and does not execute lines after.
  }

  res.send({ message: "You are not allowed to see the the tanks. Type in the secret to see the tanks." });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Port started on", PORT);
});
