const navOpen = document.querySelector('#nav-open');
const navClose = document.querySelector('#nav-close');
const ulEL = document.querySelector('ul');

navOpen.addEventListener('click', () => {
  ulEL.style.top = '45%';
  navOpen.style.display = 'none';
  navClose.style.display = 'block';
});
navClose.addEventListener('click', () => {
  ulEL.style.top = '-45%';
  navOpen.style.display = 'block';
  navClose.style.display = 'none';
});
