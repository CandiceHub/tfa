"use strict";

// STICKY NAVBAR
let header = document.querySelector(".header");
let nav = document.querySelector(".menu");
if (nav) {
    window.addEventListener("scroll", (e) => {
        let sticky = header.offsetHeight - nav.offsetHeight;
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky");
        }
    });
}

// BURGER MENU
const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

if (menuBurger != undefined && menuBurger != null) {
    menuBurger.addEventListener("click", function () {
        menu.classList.toggle('menu--open');
    });
    // Permet de fermer le burger menu quand on clique sur un lien
    const menuEls = document.querySelectorAll('.menu__el');
    menuEls.forEach(menuEl => {
        menuEl.addEventListener('click', (e) => {
            menu.classList.toggle('menu--open');
        });
    });
}

if (menuBurger != undefined && menuBurger != null) {
    let section = document.querySelectorAll('.section');
    const menuEls = document.querySelectorAll('.menu__el');
    function activeLink(li) {
        menuEls.forEach((item) => item.classList.remove('menu__el--active'));
        li.classList.add('menu__el--active');
    };
    menuEls.forEach((item) =>
        item.addEventListener('click', function () {
            activeLink(this);
        }));
    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                const target = document.querySelector(`[href='#${id}']`).parentElement;
                activeLink(target);
            };
        });
    };
};

/*REVEAL*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function reveal1() {
    var reveals1 = document.querySelectorAll(".reveal1");

    for (var i = 0; i < reveals1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals1[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals1[i].classList.add("active");

        } else {
            reveals1[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");

    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals2[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals2[i].classList.add("active");

        } else {
            reveals2[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal2);