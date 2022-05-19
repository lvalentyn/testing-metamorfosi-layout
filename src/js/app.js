import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";
import forms from "./modules/forms.js";
import filter from "./modules/filter.js";
import uploadInput from "./modules/uploadInput.js";
import smoothScrolling from "./modules/smoothScrolling.js";
import swiper from "./modules/swiper.js";
import sliderPopUp from "./modules/sliderPopUp.js";

import $ from "jquery";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

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


