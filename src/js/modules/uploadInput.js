const uploadInput = () => {

	const fileInputs = document.querySelectorAll('[name="upload"]');

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, preventDefaults, false);
		});
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
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => highlight(input), false);
		});
	});
	['dragleave', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unHighlight(input), false);
		});
	});

	fileInputs.forEach(input => {
		input.addEventListener('drop', (e) => {
			console.log(e.name);
			input.files = e.dataTransfer.files;
			console.log(input.files);
			let dots;
			const arr = input.files[0].name.split('.');
			arr[0].length > 6 ? dots = "..." : dots = '.';
			const name = arr[0].substring(0, 10) + dots + arr[1];
			input.previousElementSibling.textContent = name;
		});
	});
};

export default uploadInput;

