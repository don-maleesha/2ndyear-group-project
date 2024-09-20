// script.js

let currentSlide = 0;

// Select elements
const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Calculate the total number of slides
const totalSlides = cards.length;

// Function to update the swiper position
function updateSwiper() {
  const slideWidth = cards[0].clientWidth + 20; // card width + margin
  const offset = -(currentSlide * slideWidth);
  cardWrapper.style.transform = `translateX(${offset}px)`;
}

// Event Listeners for navigation buttons
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Loop to last slide
  }
  updateSwiper();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0; // Loop to first slide
  }
  updateSwiper();
});

// Optional: Enable swipe gestures for touch devices
let startX, isDragging = false;

cardWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

cardWrapper.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;
  
  if (diff > 50) { // Swipe left
    nextButton.click();
    isDragging = false;
  } else if (diff < -50) { // Swipe right
    prevButton.click();
    isDragging = false;
  }
});

cardWrapper.addEventListener('touchend', () => {
  isDragging = false;
});
