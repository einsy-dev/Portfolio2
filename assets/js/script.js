const leftButton = document.querySelector('.carousel_control_left');
const rightButton = document.querySelector('.carousel_control_right');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel_item');
const carouselWidth = carousel.clientWidth;
let currentIndex = 0;

leftButton.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
	carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
});

rightButton.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % carouselItems.length;
	carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
});
