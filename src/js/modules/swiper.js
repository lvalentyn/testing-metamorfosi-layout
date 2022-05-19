import Swiper from "swiper/bundle";

const swiper = (selector) => {
	const swiper = new Swiper(`${selector}`, {
		slidesPerView: "auto",
		centeredSlides: true,
		observer: true,
		observeParents: true,
		grabCursor: true,
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			768: {
				centeredSlides: false,
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
};

export default swiper;