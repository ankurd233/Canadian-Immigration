
// Our Service Slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        841: {
            slidesPerView: 3,
        },
    },
});

// Pre-Loader

var loader = document.getElementById("pre_Loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

// Top to bottom

let mybutton = document.getElementById("backToTop");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.bottom = "2.5rem";
    } else {
        mybutton.style.bottom = "105%";
        mybutton.style.display = "flex";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}