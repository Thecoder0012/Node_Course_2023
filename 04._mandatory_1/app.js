import express from "express";
// import User from "./public/assets/js/user.js";
// console.log(User);
// import {userob} from "./public/assets/js/login.js";
import template from "./util/template.js";

// console.log(userob);
const app = express();

import path from "path";
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(template.renderLoginPage());
});

app.get("/homepage", (req, res) => {
  res.send(template.renderHomePage());
});

app.get("/docs", (req, res) => {
  res.send(template.renderDocsPage());
});

app.get("/newPage", (req, res) => {
  res.send(template.renderNewPage());
});

app.post("/login", (req, res) => {
  const credentials = req.body;
  if (
    credentials.username === "User" &&
    Number(credentials.password) === 1234
  ) {
    res.redirect("/homepage");
  } else {
    res.redirect("/");
  }
});

app.listen(8080, () => {
  console.log("Server started on port:", 8080);
});
