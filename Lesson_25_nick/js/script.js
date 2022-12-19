"use strict";

const form = document.querySelector(".page__form");
const action = document.querySelector(".page__actions");
const count = document.querySelector(".page__count");

document.addEventListener("click", letVisible);

function letVisible(event) {
  if (event.target.closest(".page__button")) {
    action.classList.toggle("active");
    count.classList.toggle("active");
  } else if (!event.target.closest(".page__input")) {
    action.classList.remove("active");
    count.classList.remove("active");
  }
}

document.addEventListener("keyup", letHidden);

function letHidden(event) {
  if (event.code === "Escape" || event.key === "Escape") {
    action.classList.remove("active");
    count.classList.remove("active");
  }
}

const txtInput = document.querySelector(".page__input");
const inputMax = txtInput.getAttribute("maxLength");
const txtCount = document.querySelector(".page__count span");
txtCount.innerHTML = inputMax;

txtInput.addEventListener("keyup", setTxtCounter);
txtInput.addEventListener("keydown", function (event) {
  if (event.repeat) setTxtCounter();
});

function setTxtCounter() {
  const txtCounterResult = inputMax - txtInput.value.length;
  txtCount.innerHTML = txtCounterResult;
}
