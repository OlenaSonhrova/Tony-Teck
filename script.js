document.addEventListener('DOMContentLoaded', function () {
	var burgerMenu = document.querySelector('.burger__menu');
	var headerMenu = document.querySelector('.header__menu');
	var body = document.body;

	burgerMenu.addEventListener('click', function (event) {
		burgerMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
});


const swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	grabCursor: true,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true
	},

	speed: 2000,

});




