document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('ul.nav-menu');

  mobileMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
  });
});
