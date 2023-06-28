import '../scss/main.scss';
console.log('Intro Section challenge');
const closeMenu = document.querySelector('.nav__menu--close');
const openMenu = document.querySelector('.nav__menu--open');
const navMenu = document.querySelector('[data-nav-menu]');
const mobileBackdrop = document.querySelector('.mobile-backdrop');

const navSubMenu = document.querySelector('[data-sub-list]');
const arrowDown = document.querySelector('[data-arrow-down]');
const arrowUp = document.querySelector('[data-arrow-up]');

//shows  menu by adding the  class
const openMenuHandler = () => {
  navMenu.classList.add('nav__container--show');
  mobileBackdrop.classList.add('mobile-backdrop--show');
};
//hide   menu by removing the  class
const closeMenuHandler = () => {
  navMenu.classList.remove('nav__container--show');
  mobileBackdrop.classList.remove('mobile-backdrop--show');
};

//toggle sub menu
const arrowDownHandler = () => {
  toggleArrow();
};
const arrowUpHandler = () => {
  toggleArrow();
};

function toggleArrow() {
  navSubMenu.classList.toggle('nav__list__sub-container-hide');
  arrowUp.classList.toggle('arrow--hidden');
  arrowDown.classList.toggle('arrow--hidden');
}

openMenu.addEventListener('click', openMenuHandler);
closeMenu.addEventListener('click', closeMenuHandler);
arrowDown.addEventListener('click', arrowDownHandler);
arrowUp.addEventListener('click', arrowUpHandler);
