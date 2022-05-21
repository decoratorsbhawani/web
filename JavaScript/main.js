function getData() {
    console.log("clientWidth", document.documentElement.clientWidth);
    console.log("clientHeight", document.documentElement.clientHeight);
}

function redirectHome() {
    document.location.href = "/";
}
function redirectTo(n) {
    document.location.href = n;
}

const trigger = document.querySelector(".contact-us-btn");
const close_button = document.querySelector(".close-button");

function toggleModel() {
    if (!(window.innerWidth < 1260)) {
        document.getElementsByClassName("model-background")[0].classList.toggle("hide-model");
    }
}

trigger.addEventListener("click", toggleModel);
close_button.addEventListener("click", toggleModel);
