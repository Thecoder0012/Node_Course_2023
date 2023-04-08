const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const name = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const userVal = document.getElementById("username").value;
  const passVal = document.getElementById("password").value;

  if (name === userVal && passVal === password) {
    window.location.href = "/homepage";
  }
});


