// ============================================================
// REVIEW 02 | Sorting
// ============================================================
// JavaScript's default .sort() converts items to STRINGS first.
// That works for words. It breaks numbers:
//   [10, 1, 21, 2].sort()  →  [1, 10, 2, 21]
//
// Fix: pass a comparator.
//   return NEGATIVE  →  a comes first
//   return POSITIVE  →  b comes first
//   return 0         →  leave them as-is
//
// Shortcut for numbers: (a, b) => a - b
//   if a is smaller, a - b is negative → a comes first
// ============================================================

const nums = [10, 1, 21, 2, 100, 3];

// ------------------------------------------------------------
// 1. Sort numbers
// ------------------------------------------------------------
// Return a NEW sorted array. Don't mutate nums.
// Hint: [...nums] copies first, then .sort(...)

function sortAscending(arr) {
	// Your code here
}

function sortDescending(arr) {
	// Your code here
}

console.log("1a. default (broken):", [...nums].sort());
console.log("1b. ascending:       ", sortAscending(nums));
// Expected: [1, 2, 3, 10, 21, 100]
console.log("1c. descending:      ", sortDescending(nums));
// Expected: [100, 21, 10, 3, 2, 1]
console.log("1d. original unused: ", nums);
// Expected: [10, 1, 21, 2, 100, 3]

const products = [
	{ name: "HDMI Cable", price: 15, category: "accessories" },
	{ name: "Webcam", price: 80, category: "accessories" },
	{ name: "Laptop", price: 999, category: "computers" },
	{ name: "USB Hub", price: 30, category: "accessories" },
	{ name: "Desktop", price: 999, category: "computers" },
	{ name: "Mouse", price: 30, category: "accessories" },
	{ name: "Keyboard", price: 50, category: "accessories" },
];

// ------------------------------------------------------------
// 2. Sort objects by one field
// ------------------------------------------------------------
// Cheapest first. Same comparator idea: compare a.price and b.price.

function sortByPrice(products) {
	// Your code here
}

console.log("\n2. by price:");
console.dir(sortByPrice(products));
// Expected: HDMI Cable (15), Mouse (30), USB Hub (30), Keyboard (50),
//           Webcam (80), Laptop (999), Desktop (999)
// Ties can be in either order for this one.

// ------------------------------------------------------------
// 3. Sort by two fields (tiebreaker)
// ------------------------------------------------------------
// Price ascending. If prices are equal, name A → Z.
//
// Trick:  firstCompare || secondCompare
// If the first compare is 0 (tie), JS falls through to the second.
//
// Names: use a.name.localeCompare(b.name)
//   "Mouse".localeCompare("USB Hub")  →  negative (M before U)

function sortByPriceThenName(products) {
	// Your code here
}

console.log("\n3. by price, then name:");
console.dir(sortByPriceThenName(products));
// Expected:
//   HDMI Cable 15, Mouse 30, USB Hub 30, Keyboard 50,
//   Webcam 80, Desktop 999, Laptop 999
