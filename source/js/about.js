"use strict";

const worksList = document.querySelector(`.my-works__list`);
const textItems = worksList.querySelectorAll(`.my-works__text-about`);
const DESKTOP_WIDTH = 1440;

textItems.forEach((textItem) => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    textItem.style.display = `none`;
  }
});

worksList.addEventListener(`click`, (evt) => {
  textItems.forEach((textItem) => {
    if (evt.target.dataset.name === textItem.dataset.name) {
      if (textItem.style.display === `none`) {
        evt.target.textContent = `Скрыть`;
        textItem.style.display = `block`;
      } else {
        evt.target.textContent = `Подробнее`;
        textItem.style.display = `none`;
      }
    }
  });
});
