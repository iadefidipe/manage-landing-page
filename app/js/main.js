'use strict'

//  DOM elements
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.header__overlay');
const headerMenu = document.querySelector ('.header__menu');
const header = document.querySelector('header');
const headerLinks = document.querySelector(".header__links");


//* create mobile dropdown functionality
btnHamburger.addEventListener('click', function(e){
  console.log(headerLinks);
  btnHamburger.classList.toggle("hamburger");
  overlay.classList.toggle('overlay');
  headerLinks.classList.toggle('drop-down');
})



// Swiper JS initialized
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

