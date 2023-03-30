fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json())
  .then((result) => {
    const quest = document.getElementById("quest"); // define const inside fetch scope, so it wont exist forever if defined at the top.
    quest.innerText = result.activity; // innerHtml enables crosssite scripting
  });
