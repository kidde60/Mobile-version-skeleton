function openNav() {
  document.getElementById('myNav').style.height = '100%';
} openNav();

/* Close */
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
} closeNav();
const overlay = document.querySelector('#myNav');
const links = document.querySelector('.menu-link');
const links1 = document.querySelector('.menu-link1');
const links2 = document.querySelector('.menu-link2');
links.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.height = '100%';
  } else {
    overlay.style.height = '0%';
  }
});
links1.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.height = '100%';
  } else {
    overlay.style.height = '0%';
  }
});
links2.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.height = '100%';
  } else {
    overlay.style.height = '0%';
  }
});