import '../scss/main.scss';
console.log('Intro Section challenge');
const closeMenu = document.querySelector('.nav__menu--close');
const openMenu = document.querySelector('.nav__menu--open');
const navMenu = document.querySelector('[data-nav-menu]');
const mobileBackdrop = document.querySelector('.mobile-backdrop');

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
openMenu.addEventListener('click', openMenuHandler);
closeMenu.addEventListener('click', closeMenuHandler);
