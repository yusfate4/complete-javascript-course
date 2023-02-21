'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// lecture
// selecting elements
const header = document.querySelector('header');
const allSections = document.querySelectorAll('section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class = btn btn--close-cookie">Got it! </button>';

// header.prepend(message)
header.append(message);

// header.before(message)
// header.after(message)

// Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove()
// })

// Style, attribute and classes

// Style
message.style.backgroundColor = '#37383d'
message.style.width = '1200'

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'


document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attribute
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAnimations('src'));

const link = document.querySelector('.twitter-link')
console.log(link.href);
console.log(link.getAttribute('href'));

// Classes
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')


