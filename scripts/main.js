'use strict';

const dropArrow = document.querySelector('.roof__arrow-box');
const dropArrowDown = document.querySelector('.basement-contact__arrow-box');

const arrow = (event) => {
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

  else if (event.target.closest('.basement-contact__arrow-box')) {
    const dropMenu = document.querySelector('.basement-contact__drop-list');
    const dropRectangle = document.querySelector('.basement-contact__drop-rectangle');

    if (dropArrowDown.classList.contains('basement-contact__arrow-box_active')) {
      dropArrowDown.classList.remove('basement-contact__arrow-box_active');
      dropMenu.classList.remove('basement-contact__drop-list_active');
      dropRectangle.classList.remove('basement-contact__drop-rectangle_active');
    }
    else {
      dropArrowDown.classList.add('basement-contact__arrow-box_active');
      dropMenu.classList.add('basement-contact__drop-list_active');
      dropRectangle.classList.add('basement-contact__drop-rectangle_active');
    }
  }
}

dropArrow.addEventListener('click', arrow);
dropArrowDown.addEventListener('click', arrow);

const navSearchIco = document.querySelector('.navigation__search-icon');

navSearchIco.addEventListener('click', (event) => {
  event.preventDefault();

  const navSearchWrap = document.querySelector('.navigation__search-wrapper');
  const navSearchInput = document.querySelector('.navigation__search-input');

  if (navSearchWrap.classList.contains('navigation__search-wrapper_active')) {
    navSearchWrap.classList.remove('navigation__search-wrapper_active');
    navSearchInput.classList.remove('navigation__search-input_active');
  }
  else {
    navSearchWrap.classList.add('navigation__search-wrapper_active');
    navSearchInput.classList.add('navigation__search-input_active');
  }
});

const headerMenu = document.querySelector('.header__menu');

headerMenu.addEventListener('click', (event) => {
  const navigationMenu = document.querySelector('.navigation');

  if (headerMenu.classList.contains('header__menu_active')) {
    headerMenu.classList.remove('header__menu_active');
    navigationMenu.classList.remove('navigation_active');

  }
  else {
    headerMenu.classList.add('header__menu_active');
    navigationMenu.classList.add('navigation_active');
  }
})
