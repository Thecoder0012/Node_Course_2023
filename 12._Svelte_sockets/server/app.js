import express from 'express';
const app = express();


app.use(express.json());

import session from "express-session";
app.use(
  session({
    key: "key",
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true, // save it even though it is not initialised
    cookie: { secure: false }, // working on https if true
  })
);
import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["*"],
  },
});

io.on("connection", (socket) => {
  socket.on("a client choose a color", (data) => {
    io.emit("a new color just dropped", data);
  });
});

app.get("/users/me",(req,res) => {
    const {username} = req.session;
    res.send({ data: username });
})
app.post("/register",(req,res) => {
    console.log(req.body);
    req.session.username = req.body.username;
    res.send({data: req.body.username});
});


server.listen(8080,() => console.log("Server is running on",8080));