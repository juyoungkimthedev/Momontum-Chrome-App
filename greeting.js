const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text) {
    // if we going to paint a text, we need to hide the form
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init();