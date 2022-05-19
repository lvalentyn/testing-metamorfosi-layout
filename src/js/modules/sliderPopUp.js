const sliderPopUp = () => {
	const btns = document.querySelectorAll('.js-team__btn')
	const infoWrapper = document.querySelectorAll('.js-team-info')
	const popupWrapper = document.querySelector('.js-slider-popup')
	const modal = document.querySelector('.js-modal')
	const close = document.querySelector('.js-modal .popup__close')

	// modal.classList.add('hide')

	close.addEventListener('click', (e) => {
		modal.classList.add('hide')
		modal.classList.remove('show')
	})

	btns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()

			if (e.target.nextElementSibling.classList.contains('js-team-info')) {
				popupWrapper.innerHTML = e.target.nextElementSibling.innerHTML
				modal.classList.remove('hide')
				modal.classList.add('show')
			}
		})
	})
}

export default sliderPopUp;