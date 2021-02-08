// "use strict"

var buttonUp = document.querySelector('.button-up');
var scrollHeight = document.documentElement.scrollHeight;
var clientHeight=document.documentElement.clientHeight;


window.addEventListener('scroll', function() {
  if (window.pageYOffset === scrollHeight - clientHeight) {
    buttonUp.classList.remove('visually-hidden');
  } else {
    buttonUp.classList.add('visually-hidden');
  }
})

buttonUp.addEventListener('click', function() {
  window.scrollTo(0, 0);
})
