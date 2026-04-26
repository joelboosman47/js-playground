const products = [
	{ id: 101, name: "Laptop", price: 999, inStock: true },
	{ id: 102, name: "Mouse", price: 25, inStock: false },
	{ id: 103, name: "Keyboard", price: 50, inStock: true },
	{ id: 104, name: "Monitor", price: 200, inStock: true },
];

/**
 * Goal: Return an array of strings for products that are in stock.
 * Format: "Name - $Price"
 */
function getAvailableProductLabels(products) {
	// Hint: You can chain .filter() and .map() together!
	const result = products
		.filter((item) => item.inStock === true)
		.map((item) => `${item.name} - $${item.price}`);
	return result;
}

const labels = getAvailableProductLabels(products);
console.log("Available Products:");
console.log(labels);

/* 
EXPECTED OUTPUT:
["Laptop - $999", "Keyboard - $50", "Monitor - $200"]
*/
