const hamburguerMenu = document.getElementById('hamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hasFadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburguerMenu?.addEventListener('click', function () {
  const hasOpenClass = header.classList.contains('open');
  hasOpenClass ? openHambuerguerMenu() : closeHamburguerMenu();
});

function openHambuerguerMenu() {
  body.classList.remove('hidden-scroll');
  header.classList.remove('open');

  for (const element of hasFadeElements) {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  }
}

function closeHamburguerMenu() {
  header.classList.add('open');
  body.classList.add('hidden-scroll');

  for (const element of hasFadeElements) {
    element.classList.add('fade-in');
    element.classList.remove('fade-out');
  }
}
