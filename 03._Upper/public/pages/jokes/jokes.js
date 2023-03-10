import Sentiment from "sentiment";
const sentiment = new Sentiment();
fetch(
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
).then(response => response.json())
.then(result => {
    console.log(result);

});


const getData = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    const data = await response.json();
    console.log(data);
};

console.log(sentiment.analyze("Node is bad"));

getData();  