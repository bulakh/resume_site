var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.add('main-nav--hidden');
  navToggle.classList.remove('page-header__toggle--nojs')

  navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('page-header__toggle--closed')) {
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
    } else {
      navToggle.classList.add('page-header__toggle--closed');
      navToggle.classList.remove('page-header__toggle--opened');
    }
  });

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--hidden')) {
      navMain.classList.remove('main-nav--hidden');
    } else {
      navMain.classList.add('main-nav--hidden');
    }
  });
