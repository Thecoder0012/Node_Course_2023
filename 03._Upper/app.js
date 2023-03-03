import express from "express";
const app = express();

import path from "path"; // instead of __dirname

// import jokes from "./utility/jokes.js";
// console.log(jokes);

app.use(express.static("public")); // css/js files included in the public folder.

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontpage/frontpage.html")); // path.resolve() gives absolute path for a file
});

app.get("/quests", (req, res) => {
  res.sendFile(path.resolve("public/pages/quests/quests.html")); // path.resolve() gives absolute path for a file
});

app.listen(8080, (error) => {
  if (error) console.log(error);
  console.log("App started on port", 8080);
});
