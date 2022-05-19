const uploadInput = () => {

	const upload = document.querySelector('.contact-us__upload-input');

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		upload.addEventListener(eventName, preventDefaults, false);
	});

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

	upload.addEventListener('drop', (e) => {
		upload.files = e.dataTransfer.files;
		console.log(upload.files);
		let dots;
		const arr = upload.files[0].name.split('.');
		arr[0].length > 6 ? dots = "..." : dots = '.';
		const name = arr[0].substring(0, 10) + dots + arr[1];
		upload.previousElementSibling.textContent = name;
	});
};

export default uploadInput;

