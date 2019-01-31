// Photo Selection and Carousel Function
document.querySelector('.images').addEventListener('click', function(event) {
	event.preventDefault();

	const imageShow = document.querySelector('.shown-image');
	imageShow.style.backgroundImage = `url(${event.target.src}`;
	console.log(event.target);
});

// Item Selection Highlight Function
const allProducts = document.querySelectorAll('.product');

allProducts.forEach(function(product) {
	product.addEventListener('click', function(event) {
		event.preventDefault();

		if (event.target.tagName == 'BUTTON') {
			this.classList.toggle('selected');
			for (let sibling of this.parentNode.children) {
				if (sibling !== this) sibling.classList.remove('selected');
			}
		}
	});
});
