import express from 'express';
const app = express();

import planetsRouter from './routers/planetsRouter.js';
app.use(planetsRouter);

import peopleRouter from "./routers/peopleRouter.js";
app.use(peopleRouter);

app.get("/",(req,res) => {
    res.send({message: "hello"});
});

app.listen(8080,() => {
    console.log("Started on port 8080");
})