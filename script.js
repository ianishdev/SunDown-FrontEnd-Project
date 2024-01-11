const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});







function page4Animation(){
    var elemc = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter",function(){
        fixed.style.display = "block";
    })
    elemc.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })
    
    // var elem1 = document.querySelector("#elem1");
    // elem1.addEventListener("mouseenter",function(){
    //     var image = elem1.getAttribute("data-image");
    //     fixed.style.backgroundImage = `url(${image})`;
    // })
    
    var elems = document.querySelectorAll(".elements");
    // for (var i = 0 ; i < elems.length ; i++){
    //     elems[i].addEventListener("mouseenter",function(){
    //         var image = elems[i].getAttribute("data-image")
    //         fixed.style.backgroundImage = `url(${image})`;
    //     })
    // }
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50
    });
}


swiperAnimation();
page4Animation();


var flag = 0;

var menu = document.querySelector("#Menu h3");
var full = document.querySelector("#full-scr");
var nav_img = document.querySelector("nav img");
var names = document.querySelector("#Menu .names");

menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0;
        nav_img.style.opacity = 0;
        flag = 1;

        names.classList.add("show");
    } else {
        full.style.top = "-100%";
        nav_img.style.opacity = 1;
        flag = 0;

        names.classList.remove("show");
    }
});



// document.addEventListener("DOMContentLoaded", function () {
//     var flag = 0;

//     var menu = document.querySelector("nav h3");
//     var full = document.querySelector("#full-scr");
//     var nav_img = document.querySelector("nav img");

//     menu.addEventListener("click", function () {
//         console.log("Before if statement, flag value: " + flag);

//         if (flag == 0) {
//             full.style.top = 0;
//             nav_img.style.opacity = 0;
//             flag = 1;
//         } else {
//             full.style.top = "-100%";
//             nav_img.style.opacity = 1;
//             flag = 0;
//         }

//         console.log("flag val: " + flag);
//     });
// });
