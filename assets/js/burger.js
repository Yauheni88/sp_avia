const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__navigation-menu');
const body = document.body;
const bookFl = document.querySelector('.header__btn');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
        bookFl.classList.toggle('header__btn-hidden');
    })
}