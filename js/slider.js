"use strict";

const images = document.querySelectorAll(".container .slider img");
const sliderLine = document.querySelector(".slider");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".container").offsetWidth;
  sliderLine.style.width = width * images.lenght + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });

}

window.addEventListener("resize", init);
init();

document.querySelector(".btn-slider-prev").addEventListener("click", function () {
    count--;
    if (count <0 ) {
      count = images.lenght;
    }
    rollSlider();
  });

document.querySelector(".btn-slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.lenght) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
