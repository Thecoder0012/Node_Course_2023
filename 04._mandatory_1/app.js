import express from "express";
import template from "./util/template.js";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


let username = "";
let password = null


app.get("/", (req, res) => {
  res.send(template.renderSignUp());
});

app.get("/login", (req, res) => {
  res.send(template.renderLoginPage());
});

app.get("/homepage", (req, res) => {
  res.send(template.renderHomePage());
});

app.get("/docs", (req, res) => {
  res.send(template.renderDocsPage());
});

app.get("/docs/intro", (req, res) => {
  res.send(template.renderDocsIntro());
});

app.get("/docs/express", (req, res) => {
  res.send(template.renderDocsExpress());
});

app.get("/docs/html", (req, res) => {
  res.send(template.renderDocsHtml());
});

app.get("/docs/time", (req, res) => {
  res.send(template.renderDocsTime());
});

app.get("/docs/export", (req, res) => {
  res.send(template.renderDocsExport());
});

app.get("/docs/redirection", (req, res) => {
  res.send(template.renderDocsRedirection());
});

app.get("/docs/ssr", (req, res) => {
  res.send(template.renderDocsSSR());
});

app.get("/docs/tools", (req, res) => {
  res.send(template.renderDocsTools());
});

app.get("/newPage", (req, res) => {
  res.send(template.renderNewPage());
});


app.post("/signup", (req, res) => {
   return res.redirect("/login");
});

// app.post("/login", (req, res) => {
//   const {
//     username,
//     password
//   } = req.body;
//   if (username === "User" && Number(password) === 1234) {
//     res.redirect("/homepage");
//   } else {
//     res.redirect("/login");
//   }
// });

app.listen(8080, () => {
  console.log(Date())
  console.log("Server started on port:", 8080);
});