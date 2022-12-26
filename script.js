const closeButton = document.querySelector('.closeNav');
const openButton = document.querySelector('.openNav');
const nav = document.querySelector('.header--nav');

closeButton.addEventListener('click', () => {
  nav.classList.remove('navOpen');
  console.log('is this thing on?');
});

openButton.addEventListener('click', () => {
  nav.classList.add('navOpen')
});