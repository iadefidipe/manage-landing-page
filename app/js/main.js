'use strict'

//  DOM elements
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.header__overlay');
const headerMenu = document.querySelector ('.header__menu');
const header = document.querySelector('header');
const headerLinks = document.querySelector(".header__links");
const email = document.querySelector('#email');
const errorAlert = document.querySelector('.error-alert')
const emailBtn = document.querySelector(".footer__contact-cta");
const form = document.querySelector(".footer__contact-form");


// * email validation funtionality

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check(){
  if (email.value.match(regExp)){
    email.style.border = "2px solid green";
    errorAlert.style.display = "none";
    emailBtn.style.display = "block";
    email.style.backgroundColor = "rgb(242, 255, 239)";

  }else if(email.value === ""){
    email.style.border = "none";
    errorAlert.style.display = "none";
    email.style.backgroundColor = "white";
    emailBtn.style.display = "none";
  }
  else{
    
    email.style.border = "2px solid red";
    email.style.backgroundColor = "rgb(255, 239, 239)";
    errorAlert.style.display = 'block';
    emailBtn.style.display = 'none'
  }
}



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

