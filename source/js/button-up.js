const buttonUp = document.querySelector('.button-up');
const heightMobile = 568;


window.addEventListener('scroll', function () {
  if (window.pageYOffset > heightMobile) {
    buttonUp.classList.remove('visually-hidden');
  } else {
    buttonUp.classList.add('visually-hidden');
  }
})

buttonUp.addEventListener('click', function () {
  window.scrollTo(0, 0);
})
