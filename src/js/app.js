import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";
import forms from "./modules/forms.js";
import filter from "./modules/filter.js";
import uploadInput from "./modules/uploadInput.js";
import smoothScrolling from "./modules/smoothScrolling.js";
import sliderPopUp from "./modules/sliderPopUp.js";
import swiper from "./modules/swiper.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all.js";

import AOS from "aos/dist/aos.js"
import $ from "jquery";
// plugins from npm
window.addEventListener('load', AOS.refresh)
window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	AOS.init({
		once: true,
		disable: 'mobile'
	});
	// gsap
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.matchMedia({
		"(min-width: 1024px)": function () {
			gsap.to('.js-gsap-up', {
				scrollTrigger: {
					scrub: 1
				},
				y: -200
			})
			gsap.to('.js-gsap-down', {
				scrollTrigger: {
					scrub: 1
				},
				y: 200
			})
			gsap.to('.js-gsap-left', {
				scrollTrigger: {
					scrub: 1
				},
				x: -200
			})
			gsap.to('.js-gsap-right', {
				scrollTrigger: {
					scrub: 1
				},
				x: 200
			})

			gsap.to('.js-gsap-cross-1', {
				keyframes: [
					{ x: '-35vw', y: '-30vh' },
					{ x: '-75vw', y: '-10vh' },
					{ x: '-35vw', y: '30vh' },
					{ x: 0, y: 0 },
				],
				duration: 15,
				rotate: 360,
				repeat: -1
			})
			gsap.to('.js-gsap-cross-2', {
				keyframes: [
					{ x: '35vw', y: '-60vh' },
					{ x: '75vw', y: '10vh' },
					{ x: '35vw', y: '-30vh' },
					{ x: 0, y: 0 },
				],
				duration: 15,
				rotate: 360,
				repeat: -1
			})

		}
	})

	ScrollTrigger.create({
		start: 'top -80',
		end: 99999,
		toggleClass: { className: 'sticky', targets: '.js-sticky' }
	});



	// my modules
	smoothScrolling();
	sliderPopUp();
	filter('.js-partners-menu', '.js-partners-tab', '.js-partners-content');
	filter('.js-team-menu', '.js-team-tab', '.js-team-content');
	uploadInput();
	forms();
	swiper('.js-team-slider');
	burger('.js-burger-menu', '.js-burger-btn');

	// for create webP dublicate
	flsFunction.isWebp();

});


