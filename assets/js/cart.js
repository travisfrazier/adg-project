document.addEventListener('DOMContentLoaded', function() {
	ready();
});

//Shopping Cart Object
const shoppingCart = [
	{
		shipping: 19.99,
		total: 0
	}
];

// Products Object
const products = {
	productOne: {
		name: 'Face Oil',
		img: 'assets/images/single-img.png',
		price: 55
	},
	productTwo: {
		name: 'Hand Oil',
		img: 'assets/images/set-img.png',
		price: 220
	},
	productThree: {
		name: 'Eye Oil',
		img: 'assets/images/pack-img.png',
		price: 220
	}
};

function ready() {
	const itemButtons = document.querySelectorAll('.item-button');
	for (let i = 0; i < itemButtons.length; i++) {
		let button = itemButtons[i];
		button.addEventListener('click', function() {
			let buttonClicked = event.target;
			const itemButtons = document.querySelectorAll('.item-button');
			let itemValue = 0;

			showShipping();

			if (buttonClicked === itemButtons[0]) {
				shoppingCart.push(products.productOne);
				itemValue = products.productOne.price;
			} else if (buttonClicked === itemButtons[1]) {
				shoppingCart.push(products.productTwo);
				itemValue = products.productTwo.price;
			} else if (buttonClicked === itemButtons[2]) {
				shoppingCart.push(products.productThree);
				itemValue = products.productThree.price;
			}
			addItemToCart();
			addToTotal(itemValue);
			showFullTotal();
		});
	}
}

function addItemToCart() {
	let newItem = document.createElement('div');
	newItem.className = 'item';
	const cart = document.querySelector('.cart');

	for (let i = 0; i < shoppingCart.length; i++) {
		newItem.innerHTML = `<img class="item-photo" src="${shoppingCart[i].img}" />
         <p class="item-name">${shoppingCart[i].name}</p>
        <p class="item-price">$${shoppingCart[i].price}</p>`;
		cart.appendChild(newItem);
	}
}

function addToTotal(itemValue) {
	shoppingCart[0].total = shoppingCart[0].total + itemValue;
	document.querySelector('.sub-total').innerHTML = `Sub-Total: ${
		shoppingCart[0].total
	}.00`;
}

function showShipping() {
	const shipping = document.querySelector('.shipping');
	shipping.style.display = 'block';
	shipping.innerHTML = `Shipping: $${shoppingCart[0].shipping}`;
}

function showFullTotal() {
	const fullTotal = document.querySelector('.total');
	fullTotal.innerHTML = `Total: <strong>$${shoppingCart[0].total +
		shoppingCart[0].shipping}</strong>`;
}
