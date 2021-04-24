const hamburguerMenu = document.getElementById('hamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamburguerMenu?.addEventListener('click', function () {
  const hasOpenClass = header.classList.contains('open');
  if (hasOpenClass) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    return;
  }
  header.classList.add('open');
  overlay.classList.add('fade-in');
  overlay.classList.remove('fade-out');
});
