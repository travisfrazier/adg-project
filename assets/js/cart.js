//Shopping Cart Array Storage
const shoppingCart = [
	{
		shipping: 19.99,
		subTotal: 0,
		calcTotal: function() {
			this.total = this.shipping + this.subTotal;
		},
		total: 0
	}
];

// Individual Products Object
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

//Event Listener for All Product Buttons - Calls other functions when a button is pressed
const itemButtons = document.querySelectorAll('.item-button');
for (let i = 0; i < itemButtons.length; i++) {
	let button = itemButtons[i];
	button.addEventListener('click', function() {
		let buttonClicked = event.target;

		let itemValue = 0;

		//Calls function to display shipping
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

		//Calls shopping cart function on button click
		addItemToCart();
		addToSubTotal(itemValue);
		showFullTotal();
	});
}

//Adds item clicked to the shopping cart
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

//Updates subtotal in shopping cart object and displays subtotal on page
function addToSubTotal(itemValue) {
	shoppingCart[0].subTotal = shoppingCart[0].subTotal + itemValue;
	document.querySelector('.sub-total').innerHTML = `Sub-Total: ${
		shoppingCart[0].subTotal
	}.00`;
}

//Displays the shipping total on the page
function showShipping() {
	const shipping = document.querySelector('.shipping');
	shipping.style.display = 'block';
	shipping.innerHTML = `Shipping: $${shoppingCart[0].shipping}`;
}

//Displays full total to page = subtotal + shipping and calls the object method to calc
function showFullTotal() {
	shoppingCart[0].calcTotal();
	const fullTotal = document.querySelector('.total');
	fullTotal.innerHTML = `Total: <strong>$${shoppingCart[0].total}</strong>`;
}
