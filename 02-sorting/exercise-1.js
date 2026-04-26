// ============================================================
// 02-sorting | Exercise 1: The Sort Gotcha
// ============================================================

// --- Part 1: The Famous Bug ---
// JavaScript's default .sort() converts elements to STRINGS before sorting.
// This works fine for words, but breaks completely for numbers.

const nums = [10, 1, 21, 2, 100, 3];

const defaultSorted = nums.sort();
console.log("Default sort (broken for numbers):", defaultSorted);
// You might expect: [1, 2, 3, 10, 21, 100]
// But you'll get:   ???

// --- Part 2: Your Challenge ---
// Fix the sort so the numbers come out in the correct order.
// JavaScript's .sort() accepts a "comparator" function:
//   .sort((a, b) => ...)
// Rules:
//   • Return a NEGATIVE number → a comes first
//   • Return a POSITIVE number → b comes first
//   • Return 0              → keep the same order

const nums2 = [10, 1, 21, 2, 100, 3];

function sortAscending(arr) {
  // Your code here! Return the sorted array.
  return arr.sort();
}

function sortDescending(arr) {
  // Bonus: sort in descending order (largest first)
  return arr.sort();
}

console.log("\nAscending  (your fix):", sortAscending(nums2));
console.log("Descending (bonus):   ", sortDescending([10, 1, 21, 2, 100, 3]));

/*
EXPECTED OUTPUT:
Ascending:  [1, 2, 3, 10, 21, 100]
Descending: [100, 21, 10, 3, 2, 1]
*/

// --- Part 3: Sorting Objects ---
// Now sort this array of products by price, cheapest first.

const products = [
  { name: "Monitor",  price: 200 },
  { name: "Mouse",    price: 25  },
  { name: "Laptop",   price: 999 },
  { name: "Keyboard", price: 50  },
];

function sortByPrice(products) {
  // Your code here!
  return products;
}

console.log("\nProducts sorted by price:");
console.dir(sortByPrice(products));

/*
EXPECTED OUTPUT:
[
  { name: 'Mouse',    price: 25  },
  { name: 'Keyboard', price: 50  },
  { name: 'Monitor',  price: 200 },
  { name: 'Laptop',   price: 999 }
]
*/
