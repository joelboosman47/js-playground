// ============================================================
// 02-sorting | Exercise 2: Sorting by Multiple Criteria
// ============================================================

// When two items have the same primary sort value, you need a
// "tiebreaker" — a secondary sort condition.
//
// The trick: in your comparator, check the primary condition first.
// If it results in 0 (a tie), fall through to the secondary condition.

const products = [
	{ name: "HDMI Cable", price: 15, category: "accessories" },
	{ name: "Webcam", price: 80, category: "accessories" },
	{ name: "Laptop", price: 999, category: "computers" },
	{ name: "USB Hub", price: 30, category: "accessories" },
	{ name: "Desktop", price: 999, category: "computers" },
	{ name: "Mouse", price: 30, category: "accessories" },
	{ name: "Keyboard", price: 50, category: "accessories" },
];

// --- Challenge 1 ---
// Sort by price ascending.
// If two items have the SAME price, sort alphabetically by name (A → Z).
// Hint: String comparison uses .localeCompare()
//   "apple".localeCompare("banana") → returns a negative number (apple comes first)

function sortByPriceThenName(products) {
	return [...products].sort((a, b) => {
		return a.price - b.price || a.name.localeCompare(b.name);
	});
}

console.log("Sorted by price, then name:");
console.dir(sortByPriceThenName(products));

/*
EXPECTED OUTPUT:
[
  { name: 'HDMI Cable', price: 15,  category: 'accessories' },
  { name: 'Mouse',      price: 30,  category: 'accessories' },  ← M before U
  { name: 'USB Hub',    price: 30,  category: 'accessories' },
  { name: 'Keyboard',   price: 50,  category: 'accessories' },
  { name: 'Webcam',     price: 80,  category: 'accessories' },
  { name: 'Desktop',    price: 999, category: 'computers'   },  ← D before L
  { name: 'Laptop',     price: 999, category: 'computers'   }
]
*/

// --- Challenge 2 (Bonus) ---
// Sort first by CATEGORY (A → Z), then by PRICE ascending within each category.

function sortByCategoryThenPrice(products) {
	return [...products].sort(
		(a, b) => a.category.localeCompare(b.category) || a.price - b.price,
	);
}

console.log("\nSorted by category, then price:");
console.dir(sortByCategoryThenPrice(products));

/*
EXPECTED OUTPUT:
[
  { name: 'HDMI Cable', price: 15,  category: 'accessories' },
  { name: 'USB Hub',    price: 30,  category: 'accessories' },
  { name: 'Mouse',      price: 30,  category: 'accessories' },
  { name: 'Keyboard',   price: 50,  category: 'accessories' },
  { name: 'Webcam',     price: 80,  category: 'accessories' },
  { name: 'Desktop',    price: 999, category: 'computers'   },
  { name: 'Laptop',     price: 999, category: 'computers'   }
]
*/
