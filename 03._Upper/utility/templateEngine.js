import fs from 'fs';
import escape from "escape-html" // prevent crosssite scripting by return an object as a string (chars < > script chars)


export function renderPage(pagePath,config={}){
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString().replace("$TAB_TITLE",config.tabTitle || "Upper").replace("$CSS_LINK",config.cssLink || "")
const footer = fs.readFileSync("./public/components/footer/footer.html").toString().replace("$FOOTER_YEAR", `©${new Date().getFullYear()}`);

const page = fs.readFileSync(pagePath).toString();
return navbar + page + footer;
}

export function readPage(pagePath){
    return fs.readFileSync(pagePath).toString();
}

