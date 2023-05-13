import express from 'express';
import "dotenv/config"

import roomRouter from "./routers/roomRouter.js";
const app = express();



function houseButler(req, res, next) {
  console.log("this way");
  next();
}
app.use("/room",houseButler);
app.use(roomRouter);





app.get("/room", (req, res, next) => {
  next();
  // res.send({message: "I am in room 1"});
});

function guard(){
    if(req.query.name === "Pete"){
         next(); // return or just create else statement to not have 2 headers (cannot send headers after being sent to the client)
         req.name = "Pete"
    }else{
        res.send({message: "You are not allowed in"})
    }
}


app.get("/frontdoor", guard, (req,res) => {
    res.send({message: `Please enter ${req.name}`});
});

app.get("/inlinemiddleware",(req,res,next) => {
    console.log("Enters here first");
    next();
},
    (req,res,next) => {
        console.log("here now");
        res.send({message: "Called inline middleware"});
    })

app.get("/room", (req, res,next) => {
    //  next();
  res.send({ message: "I am in room 2" });
});


app.get("*",(req,res) => {
    // * wildcard is matching with everything. So reaches this endpoints, if we go to a random endpoint
    res.send("<h1>404 - Not Found </h1>");
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
