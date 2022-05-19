const sliderPopUp = () => {
	const btns = document.querySelectorAll('.js-team__btn')
	const popupWrapper = document.querySelector('.js-slider-popup')
	const modal = document.querySelector('.js-modal')

	modal.addEventListener('click', (e) => {
		if (e.target.classList.contains('js-modal') || e.target.classList.contains('popup__close')) {
			modal.classList.add('hide')
			modal.classList.remove('show', 'fade')
		}
	})
	btns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()

			if (e.target.nextElementSibling.classList.contains('js-team-info')) {
				popupWrapper.innerHTML = e.target.nextElementSibling.innerHTML
				modal.classList.remove('hide')
				modal.classList.add('show', 'fade')
			}
		})
	})
}

export default sliderPopUp;