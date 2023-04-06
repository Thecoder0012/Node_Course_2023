import fs from "fs";

function render(page) {
  const navbar = fs
    .readFileSync("./public/components/navbar/navbar.html")
    .toString();
  return navbar + page;
}

function read(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

function renderLoginPage() {
  const path = read("./public/pages/login/login.html");
  return path;
}

function renderDocsPage() {
  const path = read("./public/pages/documentation/documentation.html");
  const page = render(path);
  return page;
}

function renderDocsIntro() {
  const path = read("./public/pages/documentation/intro.html");
  const page = render(path);
  return page;
}

function renderDocsExpress() {
  const path = read("./public/pages/documentation/express.html");
  const page = render(path);
  return page;
}

function renderDocsHtml() {
  const path = read("./public/pages/documentation/rendering.html");
  const page = render(path);
  return page;
}

function renderDocsRedirection() {
  const path = read("./public/pages/documentation/redirect.html");
  const page = render(path);
  return page;
}

function renderDocsSSR() {
  const path = read("./public/pages/documentation/ssr.html");
  const page = render(path);
  return page;
}

function renderDocsTime() {
  const path = read("./public/pages/documentation/time.html");
  const page = render(path);
  return page;
}

function renderDocsExport() {
  const path = read("./public/pages/documentation/export.html");
  const page = render(path);
  return page;
}

function renderDocsTools() {
  const path = read("./public/pages/documentation/tools.html");
  const page = render(path);
  return page;
}

function renderNewPage() {
  const path = read("./public/pages/newPage/newPage.html");
  const page = render(path);
  return page;
}
function renderHomePage() {
  const path = read("./public/pages/index/index.html");
  const page = render(path);
  return page;
}

export default {
  render,
  read,
  renderHomePage,
  renderLoginPage,
  renderDocsPage,
  renderNewPage,
  renderDocsIntro,
  renderDocsExpress,
  renderDocsExport,
  renderDocsHtml,
  renderDocsRedirection,
  renderDocsTime,
  renderDocsSSR,
  renderDocsTools
};
