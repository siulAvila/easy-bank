const hamburguerMenu = document.getElementById('hamburguer');

hamburguerMenu?.addEventListener('click', function () {
  const hasOpenClass = hamburguerMenu.classList.contains('open');

  hasOpenClass
    ? hamburguerMenu.classList.remove('open')
    : hamburguerMenu.classList.add('open');
});
