const inventory = [
	{ name: "Laptop", price: 1000, inStock: true },
	{ name: "Mouse", price: 20, inStock: true },
	{ name: "Keyboard", price: 50, inStock: false },
	{ name: "Monitor", price: 200, inStock: true },
];

/**
 * Goal: Sum up the prices of all products where inStock is true.
 * Use .reduce()!
 */
function calculateTotalInStockValue(products) {
	// .reduce((accumulator, currentItem) => { ... }, startingValue)
	return products.reduce(
		(acc, prod) => (prod.inStock ? acc + prod.price : acc),
		0,
	);
}

const total = calculateTotalInStockValue(inventory);
console.log(`Total value of in-stock items: $${total}`);

/* 
EXPECTED OUTPUT:
Total value of in-stock items: $1220
*/
