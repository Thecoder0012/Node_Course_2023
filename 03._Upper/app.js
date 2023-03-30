import express from "express";
const app = express();
import {
  renderPage,
  readPage
} from "./utility/templateEngine.js";


import path from "path"; // instead of __dirname
import fs from "fs";

const frontpagePath = "./public/pages/frontpage/frontpage.html";
const frontpagePage = renderPage(frontpagePath, {
  tabTitle: "Upper | Site",
});


const jokesPath = "./public/pages/jokes/jokes.html";
const jokesPage = renderPage(jokesPath, {
  tabTitle: "Upper | Jokes",
  cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`,
});

const questsPath = "./public/pages/quests/quests.html";
const questsPage = renderPage(questsPath, {
  tabTitle: "Upper | Quests"
});


// const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString(); // buffer stream to string.

// const quests = fs.readFileSync("./public/pages/quests/quests.html").toString(); // buffer stream to string.
// const jokes = fs.readFileSync("./public/pages/jokes/jokes.html").toString(); // buffer stream to string.

// constructed page
// const jokesPage = navbar + jokes + footer;
// const questsPage = navbar + quests + footer;

// import jokes from "./utility/jokes.js";
// console.log(jokes);

app.use(express.static("public")); // css/js files included in the public folder.

app.get("/", (req, res) => {
  res.send(frontpagePage); // path.resolve() gives absolute path for a file
});

app.get("/quests", (req, res) => {
  res.send(questsPage); // path.resolve() gives absolute path for a file
});

app.get("/jokes", (req, res) => {
  res.send(jokesPage); // path.resolve() gives absolute path for a file
});

app.listen(8080, (error) => {
  if (error) console.log(error);
  console.log("App started on port", 8080);
});