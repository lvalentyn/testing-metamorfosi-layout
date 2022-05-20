const uploadInput = () => {

	const upload = document.querySelector('.contact-us__upload-input');
	const uploadLabel = document.querySelector('.contact-us__upload-btn');

	if (upload) {
		upload.addEventListener('change', function (e) {
			let fileName = this.files[0].name;
			const arr = fileName.split('.');
			dots(arr)
		})

		upload.addEventListener('drop', (e) => {
			upload.files = e.dataTransfer.files;
			const arr = upload.files[0].name.split('.');
			dots(arr)
		});
	}

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		upload.addEventListener(eventName, preventDefaults, false);
	});

	function dots(arr) {
		let dots;
		arr[0].length > 6 ? dots = "..." : dots = '.';
		const name = arr[0].substring(0, 10) + dots + arr[1];
		uploadLabel.innerHTML = name
	}

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function highlight(item) {
		item.closest('.js-upload').classList.add('drop')
	}

	function unHighlight(item) {
		item.closest('.js-upload').classList.remove('drop')
	}

	['dragenter', 'dragover'].forEach(eventName => {
		upload.addEventListener(eventName, () => highlight(upload), false);
	});
	['dragleave', 'drop'].forEach(eventName => {
		upload.addEventListener(eventName, () => unHighlight(upload), false);
	});


};

export default uploadInput;

