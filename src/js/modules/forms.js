const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');

	const message = {
		loading: 'Sending...',
		success: 'Your message has been sent!',
		failture: 'Something went wrong...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = ''
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			if (!item.classList.contains('navbar__search')) {
				e.preventDefault();

				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status');
				item.appendChild(statusMessage);

				const formData = new FormData(item);

				postData('../files/server.php', formData)
					.then(res => {
						console.log(res);
						statusMessage.classList.add('fine')
						statusMessage.textContent = message.success;
					})
					.catch(() => statusMessage.textContent = message.failture)
					.finally(() => {
						clearInputs();
						setTimeout(() => {
							statusMessage.remove()
							document.querySelectorAll('.js-modal').forEach(item => {
								item.style.display = 'none';
							});
							document.body.style.overflow = '';
						}, 114000);
					});
			}
		});

	});
};

export default forms;