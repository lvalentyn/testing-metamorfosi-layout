import Swiper from "swiper/bundle";

const swiper = (selector) => {
	// swiper
	const swiper = new Swiper(`${selector}`, {
		// slidesPerView: 1,
		// centeredSlides: true,
		// slidesPerGroupSkip: 1,
		slidesPerView: "auto",
		centeredSlides: true,
		// spaceBetween: 30,
		observer: true,
		observeParents: true,
		grabCursor: true,
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			768: {
				centeredSlides: false,
				// slidesPerView: 2,
				// slidesPerGroup: 2,
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