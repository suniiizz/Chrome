"use strict";
const cover = document.querySelector(".box__1");
const ratingBtn = document.querySelectorAll(".rating__btn");
const submitBtn = document.querySelector(".submit__btn");
const bedge = document.querySelector(".bedge__inner");
const hidden = document.querySelector(".box__2.hidden");
const back = document.querySelector(".back__btn");

let rating = 0;
ratingBtn.forEach((el) => {
  el.addEventListener("click", () => {
    rating = this.innerText;
  });
});

submitBtn.addEventListener("click", () => {
  if (rating === 0) {
    alert("Please rate before sumbit!");
  } else {
    bedge.textContent = rating;
    cover.classList.add("hidden");
    hidden.classList.remove("hidden");
  }
});

back.addEventListener("click", () => {
  cover.classList.add("hidden");
  hidden.classList.remove("hidden");
});
