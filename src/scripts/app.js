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
