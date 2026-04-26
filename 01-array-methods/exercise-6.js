const orders = [
	{ id: 1, product: "Laptop", price: 1000, qty: 1, status: "completed" },
	{ id: 2, product: "Mouse", price: 25, qty: 3, status: "pending" },
	{ id: 3, product: "Laptop", price: 1000, qty: 2, status: "completed" },
	{ id: 4, product: "Keyboard", price: 50, qty: 5, status: "completed" },
	{ id: 5, product: "Mouse", price: 25, qty: 1, status: "cancelled" },
];

/**
 * Goal: Return a summary object with:
 *  - totalRevenue: sum of (price * qty) for 'completed' orders only
 *  - uniqueProducts: array of unique product names across ALL orders
 */
function getSummary(orders) {
	// Part 1: totalRevenue
	// Hint: filter for 'completed', then reduce to sum up (price * qty)
	const totalRevenue = orders
		.filter((order) => order.status === "completed")
		.reduce(
			(price, complOrder) => price + complOrder.price * complOrder.qty,
			0,
		);

	// Part 2: uniqueProducts
	// Hint: map to extract product names, then use Set to deduplicate
	const productNames = orders.map((order) => order.product);
	const uniqueProductSet = new Set(productNames);
	const uniqueProducts = [...uniqueProductSet];

	return { totalRevenue, uniqueProducts };
}

const summary = getSummary(orders);
console.log("Order Summary:");
console.dir(summary);

/*
EXPECTED OUTPUT:
{
  totalRevenue: 3250,
  uniqueProducts: [ 'Laptop', 'Mouse', 'Keyboard' ]
}
*/
