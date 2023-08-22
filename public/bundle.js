'use strict';

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

// (function () {
//   const navbar = document.querySelector('.nav');
//   const hero = document.querySelector('.hero__container');
//   const navbarHeight = navbar.getBoundingClientRect();

//   function onScroll() {
//     if (window.scrollY >= 0) {
//       navbar.classList.toggle('navbarfixed', window.scrollY > 0);
//     } else if (window.scrollY < 0) {
//       navbar.classList.toggle('navbarfixed', window.scrollY > 0);
//     }
//   }

//   document.addEventListener('scroll', onScroll);
// })();

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

function slider() {
  const sliders = document.querySelectorAll('.testimony__body');
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });

  buttonBefore.addEventListener('click', () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    const currentTestimony = document.querySelector('.testimony__body--show')
      .dataset.id;

    value = Number(currentTestimony);
    value += add;

    sliders[Number(currentTestimony) - 1].classList.remove(
      'testimony__body--show'
    );

    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value - 1].classList.add('testimony__body--show');
  };
}

function question() {
  const titleQuestions = [...document.querySelectorAll('.questions__title')];

  titleQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      let height = 0;
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle('questions__padding--add');
      question.children[0].classList.toggle('questions__arrow--rotate');

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
}

navbar();
menu();
slider();
question();
