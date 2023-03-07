const registerbutton = document.getElementById("register");
const loginbutton = document.getElementById("login");
const container = document.getElementById("container");

registerbutton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    });

loginbutton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
        });    