import fs from "fs";

function render(page, config = {}) {
  const navbar = fs
    .readFileSync("./public/components/navbar/navbar.html")
    .toString();
  return navbar + page;
}

function read(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

function renderLoginPage() {
  const loginPage = read("./public/pages/login/login.html");
  return loginPage;
}

function renderDocsPage() {
  const docsPath = read("./public/pages/documentation/documentation.html");
  const docsPage = render(docsPath, {});
  return docsPage;
}

function renderNewPage() {
  const newPagePath = read("./public/pages/newPage/newPage.html");
  const newPage = render(newPagePath, {});
  return newPage;
}
function renderHomePage() {
  const homePath = read("./public/pages/index/index.html");
  const homePage = render(homePath, {});
  return homePage;
}

export default {
  render,
  read,
  renderHomePage,
  renderLoginPage,
  renderDocsPage,
  renderNewPage,
};
