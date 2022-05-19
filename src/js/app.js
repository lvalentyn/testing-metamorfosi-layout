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

import $ from "jquery";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// gsap
	gsap.registerPlugin(ScrollTrigger);

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


