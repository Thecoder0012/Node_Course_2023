fetch("/api/visitors")
  .then((response) => response.json()) // gets parsed as json
  .then((result) => {
        updateVisitorCount(result.data)
  });

  function updateVisitorCount(visitorCount){
    let visitDiv = document.querySelector(".visitor-count");
    visitDiv.innerText = visitorCount;
  }

function writeVisitorLog() {
fetch("/api/visitors",{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(result => updateVisitorCount(result.data))
 

}
