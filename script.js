'use strict';
const burgerMenu = document.querySelector('.burger__menu');
const burgerButton = document.querySelector('.burger__button');
const burgerLine = document.querySelector('.burger__line');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger__menu--open');
    burgerButton.classList.toggle('burger__button--open');
    burgerLine.classList.toggle('burger__line--hide');

});

document.addEventListener('click', (event) => {
    const target = event.target;
    const isClickInside = burgerMenu.contains(target) || burgerButton.contains(target);

    if (!isClickInside && burgerMenu.classList.contains('burger__menu--open')) {
        burgerMenu.classList.remove('burger__menu--open');
        burgerButton.classList.remove('burger__button--open');
        burgerLine.classList.remove('burger__line--hide');
    }
});