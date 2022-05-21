var slideIndex = 1;
showDivs(slideIndex);


function load() {
    console.log(window.innerWidth);
}


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var workImageScrollIndex = 1;
var productImageScrollIndex = 1;
const scrollValue = 450;

function workImage(n) {
    if (window.innerWidth <= 760) {
        workImageMobile(workImageScrollIndex += n);
    } else
        workImageDesktop(n);
}

function workImageMobile(n) {
    var i;
    var x = document.getElementsByClassName('portrait-images-box')[0].querySelectorAll(".images");
    if (n > x.length) { workImageScrollIndex = 1 }
    if (n < 1) { workImageScrollIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[workImageScrollIndex - 1].style.display = "block";

}


function workImageDesktop(n) {

    if (n == 1) {
        // get the "Div" inside which you wish to scroll (i.e. the container element)
        const El = document.getElementsByClassName('portrait-images-box');

        if (!(El[0].scrollWidth - El[0].clientWidth < scrollValue * workImageScrollIndex)) {
            workImageScrollIndex += n;

            El[0].scrollTo({ left: scrollValue * workImageScrollIndex, behavior: 'smooth' });
        }

    } else if (n == -1) {


        // get the "Div" inside which you wish to scroll (i.e. the container element)
        const El = document.getElementsByClassName('portrait-images-box');

        if (!(scrollValue > scrollValue * workImageScrollIndex)) {
            workImageScrollIndex += n;

            El[0].scrollTo({ left: scrollValue * workImageScrollIndex, behavior: 'smooth' });
        }


    }
}


function productImage(n) {
    if (window.innerWidth <= 760) {
        productImageMobile(productImageScrollIndex += n);
    } else
        productImageDesktop(n);
}

function productImageMobile(n) {
    var i;
    var x = document.getElementsByClassName('portrait-images-box')[1].querySelectorAll(".images");
    if (n > x.length) { productImageScrollIndex = 1 }
    if (n < 1) { productImageScrollIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[productImageScrollIndex - 1].style.display = "block";

}


function productImageDesktop(n) {

    if (n == 1) {
        // get the "Div" inside which you wish to scroll (i.e. the container element)
        const El = document.getElementsByClassName('portrait-images-box');

        if (!(El[1].scrollWidth - El[1].clientWidth < scrollValue * productImageScrollIndex)) {
            productImageScrollIndex += n;

            El[1].scrollTo({ left: scrollValue * productImageScrollIndex, behavior: 'smooth' });
        }

    } else if (n == -1) {


        // get the "Div" inside which you wish to scroll (i.e. the container element)
        const El = document.getElementsByClassName('portrait-images-box');

        if (!(scrollValue > scrollValue * productImageScrollIndex)) {
            productImageScrollIndex += n;

            El[1].scrollTo({ left: scrollValue * productImageScrollIndex, behavior: 'smooth' });
        }


    }
}