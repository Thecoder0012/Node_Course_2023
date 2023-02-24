const express = require("express");
const app = express();

app.use(express.json());

// we use json because every language has a interpreter that understand json. Object notation of javascript.
// with get requests you can send data with path variables and query strings.
app.get("/", (req, res) => {
  res.send({ message: "Our first route" });
});

let bicycleSpins = 0;
app.get("/bicycle", (req, res) => {
  bicycleSpins += 1;
  res.send({ message: `Spinning the bicycle ${bicycleSpins}` });
});

let kick = 0;
app.get("/dinosaur", (req, res) => {
  kick += 1;
  res.send({ message: `Kicking the dinosaur: ${kick}: OW OW OW` });
});

app.get("/about", (req, res) => {
  res.send(`<h1> Hello </h1>`);
});

// for query strings (http://localhost:8080/bat?adjective=boring)
app.get("/bat", (req, res) => {
  console.log(req.query.adjective);
  res.send({ message: `The bat is ${req.query.adjective}` });
});

// path variable
app.get("/bottle/:bottleSize", (req, res) => {
  res.send({ message: `The Bottle is ${req.params.bottleSize}` });
});

app.get("/time", (req, res) => {
  res.send({
    timeUTC: new Date(),
    timeLocal: Date(),
    unixTimestamp: Date.now(),
  });
});

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

app.get("/time/day", (req, res) => {
  res.send({ data: days[new Date().getDay()]});
});

app.get("/time/month", (req, res) => {
  res.send({ data: months[new Date().getMonth()]});
});

app.post("/post", (req, res) => {
  res.send(req.body);
});
app.listen(8080);
