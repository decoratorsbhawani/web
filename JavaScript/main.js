
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

function blankRedirect(n) {
    window.open(n, '_blank');
}

function toggleModel() {
    if (!(window.innerWidth < 1260)) {
        document.getElementsByClassName("model-background")[0].classList.toggle("hide-model");
        document.getElementsByClassName("modelBox")[0].classList.toggle("animate-box");
    } else {
        redirectTo('../pages/contact-us.html');
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


// for sliding down the nav bar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    try {


        if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
            document.getElementById("header").classList.add("show-header");
        } else {
            document.getElementById("header").classList.remove("show-header");
        }
    } catch (error) {
        //  console.log("Error Occured: "+error)   
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
