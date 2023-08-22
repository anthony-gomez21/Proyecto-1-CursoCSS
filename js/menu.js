function menu() {
  const openButton = document.querySelector('.nav__img');
  const menu = document.querySelector('.nav__link');
  const closeMenu = document.querySelector('.nav__close');
  const menuAbierto = document.querySelector('.nav__link--menu');

  document.addEventListener('click', (e) => {
    if (e.target === openButton) {
      menu.classList.add('nav__link--show');
    } else if (e.target !== menuAbierto || e.target === closeMenu) {
      menu.classList.remove('nav__link--show');
    }
  });
}

export default menu;
