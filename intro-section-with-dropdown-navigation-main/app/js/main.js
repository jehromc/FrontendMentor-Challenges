import '../scss/main.scss';
console.log('Intro Section challenge');
const closeMenu = document.querySelector('.nav__menu--close');
const openMenu = document.querySelector('.nav__menu--open');
const navMenu = document.querySelector('[data-nav-menu]');
const mobileBackdrop = document.querySelector('.mobile-backdrop');

const navSubMenu = document.querySelector('[data-sub-list]');
const arrowDown = document.querySelector('[data-arrow-down]');
const arrowUp = document.querySelector('[data-arrow-up]');

const arrowDownCompany = document.querySelector('[data-arrow-down-company ]');
const arrowUpCompany = document.querySelector('[data-arrow-up-company ]');
const navSubMenuCompany = document.querySelector('[data-sub-list-company]');

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

//toggle sub menu for features
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

//toggle Sub Menu for Company link
const arrowDownCompanyHandler = () => {
  navSubMenuCompany.classList.toggle('nav__list__sub-container-hide');
  arrowUpCompany.classList.toggle('arrow--hidden');
  arrowDownCompany.classList.toggle('arrow--hidden');
};

const arrowUpCompanyHandler = () => {
  navSubMenuCompany.classList.toggle('nav__list__sub-container-hide');
  arrowUpCompany.classList.toggle('arrow--hidden');
  arrowDownCompany.classList.toggle('arrow--hidden');
};


//adding event listener for all clickable link
openMenu.addEventListener('click', openMenuHandler);
closeMenu.addEventListener('click', closeMenuHandler);
arrowDown.addEventListener('click', arrowDownHandler);
arrowUp.addEventListener('click', arrowUpHandler);

arrowDownCompany.addEventListener('click', arrowDownCompanyHandler);
arrowUpCompany.addEventListener('click', arrowUpCompanyHandler);
