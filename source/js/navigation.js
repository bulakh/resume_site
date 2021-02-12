"use strict";

// const buttonsNav = document.querySelectorAll(`.navigation__button`);
// const sectionsNav = document.querySelectorAll(``)

// При нажатии на баттон переходит на секцию
// При попадании секции в вьюпорт на баттон вешается класс актив


const sectionMainNav = document.querySelector(`.main`);
const sectionAboutMeNav = document.querySelector(`.about-me`);
const sectionMyWorksNav = document.querySelector(`.my-works`);
const sectionContactNav = document.querySelector(`.contact`);

const mainBtn = document.querySelector(`.navigation__button--main`);
const aboutMeBtn = document.querySelector(`.navigation__button--about-me`);
const myWorksBtn = document.querySelector(`.navigation__button--my-works`);
const contactBtn = document.querySelector(`.navigation__button--contact`);

function handleMainButtonClick() {
  sectionMainNav.scrollIntoView({block: `center`, behavior: `smooth`});
}

function handleAboutMeButtonClick() {
  sectionAboutMeNav.scrollIntoView({block: `center`, behavior: `smooth`});
}

function handleMyWorksButtonClick() {
  sectionMyWorksNav.scrollIntoView({block: `center`, behavior: `smooth`});
}

function handleContactButtonClick() {
  sectionContactNav.scrollIntoView({block: `center`, behavior: `smooth`});
}

mainBtn.addEventListener(`click`, handleMainButtonClick);
aboutMeBtn.addEventListener(`click`, handleAboutMeButtonClick);
myWorksBtn.addEventListener(`click`, handleMyWorksButtonClick);
contactBtn.addEventListener(`click`, handleContactButtonClick);

window.alert(`bad text for bad man gay`);
