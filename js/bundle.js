/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {
/*!********************************!*\
  !*** ./source/js/button-up.js ***!
  \********************************/
eval("\n\nconst buttonUp = document.querySelector(`.button-up`);\nconst scrollHeight = document.documentElement.scrollHeight;\nconst clientHeight = document.documentElement.clientHeight;\n\n\nwindow.addEventListener(`scroll`, function () {\n  if (window.pageYOffset === scrollHeight - clientHeight) {\n    buttonUp.classList.remove(`visually-hidden`);\n  } else {\n    buttonUp.classList.add(`visually-hidden`);\n  }\n});\n\nbuttonUp.addEventListener(`click`, function () {\n  window.scrollTo(0, 0);\n});\n\n\n//# sourceURL=webpack://resume_site/./source/js/button-up.js?");
}();
!function() {
/*!*********************************!*\
  !*** ./source/js/navigation.js ***!
  \*********************************/
eval("\n\nconst navButtons = document.querySelectorAll(`.navigation__link`);\nconst navSections = document.querySelectorAll(`main section`);\nconst nav = document.querySelector(`.navigation`);\nconst QUARTER = 0.25;\n\nconst removeAllActiveClasses = () => {\n  for (let navButton of navButtons) {\n    navButton.classList.remove(`navigation__link--active`);\n  }\n};\n\nconst addActiveClass = (id) => {\n  const selector = `.navigation__item a[href=\"#${id}\"]`;\n  document.querySelector(selector).classList.add(`navigation__link--active`);\n};\n\nwindow.addEventListener(`scroll`, () => {\n  const scrollPosition = document.documentElement.scrollTop;\n\n  for (let navSection of navSections) {\n    if (scrollPosition >= navSection.offsetTop - navSection.offsetHeight * QUARTER && scrollPosition < navSection.offsetTop + navSection.offsetHeight - navSection.offsetHeight * QUARTER) {\n      const currentID = navSection.attributes.id.value;\n      removeAllActiveClasses();\n      addActiveClass(currentID);\n    }\n  }\n});\n\nnav.addEventListener(`click`, (evt) => {\n  evt.preventDefault();\n  const currentID = evt.target.attributes.href.value;\n  const section = document.querySelector(currentID);\n  section.scrollIntoView({\n    behavior: `smooth`,\n    block: `center`\n  });\n});\n\n\n//# sourceURL=webpack://resume_site/./source/js/navigation.js?");
}();
!function() {
/*!*****************************!*\
  !*** ./source/js/toggle.js ***!
  \*****************************/
eval("\n\nconst navMain = document.querySelector(`.main-nav`);\nconst navToggle = document.querySelector(`.page-header__toggle`);\n\nnavMain.classList.add(`main-nav--hidden`);\nnavToggle.classList.remove(`page-header__toggle--nojs`);\n\nnavToggle.addEventListener(`click`, function () {\n  if (navToggle.classList.contains(`page-header__toggle--closed`)) {\n    navToggle.classList.remove(`page-header__toggle--closed`);\n    navToggle.classList.add(`page-header__toggle--opened`);\n  } else {\n    navToggle.classList.add(`page-header__toggle--closed`);\n    navToggle.classList.remove(`page-header__toggle--opened`);\n  }\n});\n\nnavToggle.addEventListener(`click`, function () {\n  if (navMain.classList.contains(`main-nav--hidden`)) {\n    navMain.classList.remove(`main-nav--hidden`);\n  } else {\n    navMain.classList.add(`main-nav--hidden`);\n  }\n});\n\n\n//# sourceURL=webpack://resume_site/./source/js/toggle.js?");
}();
!function() {
/*!****************************!*\
  !*** ./source/js/about.js ***!
  \****************************/
eval("\n\nconst worksList = document.querySelector(`.my-works__list`);\nconst textItems = worksList.querySelectorAll(`.my-works__text-about`);\nconst DESKTOP_WIDTH = 1440;\n\ntextItems.forEach((textItem) => {\n  if (window.innerWidth < DESKTOP_WIDTH) {\n    textItem.style.display = `none`;\n  }\n});\n\nworksList.addEventListener(`click`, (evt) => {\n  textItems.forEach((textItem) => {\n    if (evt.target.dataset.name === textItem.dataset.name) {\n      if (textItem.style.display === `none`) {\n        evt.target.textContent = `Скрыть`;\n        textItem.style.display = `block`;\n      } else {\n        evt.target.textContent = `Подробнее`;\n        textItem.style.display = `none`;\n      }\n    }\n  });\n});\n\n\n//# sourceURL=webpack://resume_site/./source/js/about.js?");
}();
/******/ })()
;