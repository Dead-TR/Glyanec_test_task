'use strict';

const dropArrow = document.querySelector('.roof__arrow-box');

dropArrow.addEventListener('click', (event) => {
  if (event.target.closest('.roof__arrow-box')) {
    const dropMenu = document.querySelector('.roof__drop-list');
    const dropRectangle = document.querySelector('.roof__drop-rectangle');

    if (dropArrow.classList.contains('roof__arrow-box_active')) {
      dropArrow.classList.remove('roof__arrow-box_active');
      dropMenu.classList.remove('roof__drop-list_active');
      dropRectangle.classList.remove('roof__drop-rectangle_active');
    }
    else {
      dropArrow.classList.add('roof__arrow-box_active');
      dropMenu.classList.add('roof__drop-list_active');
      dropRectangle.classList.add('roof__drop-rectangle_active');
    }
  }
});

const navSearchIco = document.querySelector('.navigation__search-icon');

navSearchIco.addEventListener('click', (event) => {
  event.preventDefault();

  const navSearchWrap = document.querySelector('.navigation__search-wrapper');

  (navSearchWrap.classList.contains('navigation__search-wrapper_active'))
    ? navSearchWrap.classList.remove('navigation__search-wrapper_active')
    : navSearchWrap.classList.add('navigation__search-wrapper_active');

})