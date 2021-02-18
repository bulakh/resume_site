"use strict";

const navButtons = document.querySelectorAll(`.navigation__link`);
const navSections = document.querySelectorAll(`main section`);
const nav = document.querySelector(`.navigation`);
const QUARTER = 0.25;

const removeAllActiveClasses = () => {
  for (let navButton of navButtons) {
    navButton.classList.remove(`navigation__link--active`);
  }
};

const addActiveClass = (id) => {
  const selector = `.navigation__item a[href="#${id}"]`;
  document.querySelector(selector).classList.add(`navigation__link--active`);
};

window.addEventListener(`scroll`, () => {
  const scrollPosition = document.documentElement.scrollTop;

  for (let navSection of navSections) {
    if (scrollPosition >= navSection.offsetTop - navSection.offsetHeight * QUARTER && scrollPosition < navSection.offsetTop + navSection.offsetHeight - navSection.offsetHeight * QUARTER) {
      const currentID = navSection.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentID);
    }
  }
});

nav.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  const currentID = evt.target.attributes.href.value;
  const section = document.querySelector(currentID);
  section.scrollIntoView({
    behavior: `smooth`,
    block: `center`
  });
});

