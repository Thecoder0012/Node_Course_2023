
const submit = document.getElementById("submit");

submit.addEventListener('click',() => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username",username);
    localStorage.setItem("password", password);
})


