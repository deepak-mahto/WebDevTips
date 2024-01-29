const slider = document.querySelectorAll(".carousel");
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxSlide = slider.length - 1;

slider.forEach(
  (image, index) => (image.style.transform = `translateX(${index * 100}%)`)
);

function nextButtonClickHandler() {
  if (currentSlide === maxSlide) {
    currentSlide = 0; // going back to the first image
  } else {
    currentSlide++;
  }
  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
  console.log(currentSlide);
}

function prevButtonClickHandler() {
  if (currentSlide === 0) {
    currentSlide = maxSlide; // going back to the last image
  } else {
    currentSlide--;
  }
  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
  console.log(currentSlide);
}

nextButton.addEventListener("click", nextButtonClickHandler);
prevButton.addEventListener("click", prevButtonClickHandler);
