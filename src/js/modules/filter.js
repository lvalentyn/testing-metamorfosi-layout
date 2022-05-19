const filter = (tabMenu, tabItem, tabWrapper) => {
	let sw = document.querySelector('.js-team-slider-0')
	const tabContent = document.querySelectorAll(tabWrapper),
		tabsWrapper = document.querySelector(tabMenu),
		tabs = document.querySelectorAll(tabItem);
	function hideContent() {
		tabContent.forEach(i => {
			i.classList.add('hide');
			i.classList.remove('show', 'fade');
		})
		tabs.forEach(i => {
			i.classList.remove('active');
		})
	}
	function showContent(i = 0) {
		tabContent[i].classList.remove('hide');
		tabContent[i].classList.add('show', 'fade');
		tabs[i].classList.add('active');
	}
	hideContent();
	showContent();
	tabsWrapper.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.matches(tabItem)) {
			tabs.forEach((item, index) => {
				if (target == item) {
					hideContent();
					showContent(index);
				}
			})
		} else {
			let a = target.closest(tabItem)

			tabs.forEach((item, index) => {
				if (a == item) {
					hideContent();
					showContent(index);
				}
			})
		}
	});

};

export default filter;