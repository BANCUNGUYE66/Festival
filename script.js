const humburger = document.querySelector('.humburger_menu');
const navLink = document.querySelector('.nav-link');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('.nav-link-line').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navLink.classList.remove('active');
}));