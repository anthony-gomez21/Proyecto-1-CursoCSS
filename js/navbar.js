function navbar() {
  const navbar = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.toggle('navbarfixed', window.scrollY > 0);
    } else if (window.scrollY <= 0) {
      navbar.classList.toggle('navbarfixed', window.scrollY > 0);
    }
  });
}

export default navbar;
