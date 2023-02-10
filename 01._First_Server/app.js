const express = require('express');
const app = express();

// we use json because every language has a interpreter that understand json. Object notation of javascript.
app.get("/",(req,res) => {
    res.send({message: "Our first route"});
});

let bicycleSpins = 0;
app.get("/bicycle",(req,res) => {
    bicycleSpins += 1;
    res.send({message: `Spinning the bicycle ${bicycleSpins}`});
});

let kick = 0;
app.get("/dinosaur",(req,res) => {
    kick += 1;
    res.send({message: `Kicking the dinosaur: ${kick}: OW OW OW`});
});

app.get("/about",(req,res) => {
    res.send(`<h1> Hello </h1>`);
});


// for query strings (http://localhost:8080/bat?adjective=boring)
app.get("/bat",(req,res) => {
    console.log(req.query.adjective);
    res.send({message: `The bat is ${req.query.adjective}`})
});

app.get("/bottle/:bottleSize",(req,res) => {
    res.send({message: `The Bottle is ${req.params.bottleSize}`})
});

app.listen(8080);