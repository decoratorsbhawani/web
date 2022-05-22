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

trigger.addEventListener("click", toggleModel);
close_button.addEventListener("click", toggleModel);

function toggleModel() {
    if (!(window.innerWidth < 1260)) {
        document.getElementsByClassName("model-background")[0].classList.toggle("hide-model");
        document.getElementsByClassName("modelBox")[0].classList.toggle("animate-box");
    }

}

function toggleMobileNav() {
    document.getElementsByClassName("mobile-nav-background")[0].classList.toggle("show-mobile-nav");
}

function animateRedirectTo(n) {
    toggleMobileNav();
    setTimeout(redirectTo, 360, n);
}

function sendMail() {
}
