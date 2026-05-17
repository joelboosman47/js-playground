// ============================================================
// 03-nested-data | Exercise 2: Destructuring
// ============================================================
// Destructuring lets you "unpack" values from objects and arrays
// into named variables in a single, clean line.

// =============================================================
// PART A: Object Destructuring
// =============================================================

const product = {
  id: 42,
  name: "Mechanical Keyboard",
  price: 120,
  specs: {
    weight: "1.2kg",
    color: "black",
  },
};

// --- Challenge A1: Basic Object Destructuring ---
// Extract 'name' and 'price' from the product object
// using destructuring (not dot notation).

function getProductLabel(product) {
  // Replace these two lines using ONE destructuring statement:
  const name = product.name;
  const price = product.price;

  return `${name} costs $${price}`;
}

console.log("A1:", getProductLabel(product));
// Expected: "A1: Mechanical Keyboard costs $120"


// --- Challenge A2: Nested Destructuring ---
// Extract 'color' from inside product.specs using destructuring.

function getProductColor(product) {
  // Hint: const { specs: { color } } = product;
  return "";
}

console.log("A2:", getProductColor(product));
// Expected: "A2: black"


// --- Challenge A3: Rename + Default Values ---
// Destructuring lets you rename variables and set defaults.
// Extract 'name' but rename it to 'productName'.
// Also extract 'discount' but default it to 0 if it doesn't exist.

function getPriceAfterDiscount(product) {
  // Hint: const { name: productName, price, discount = 0 } = product;
  return "";
}

console.log("A3:", getPriceAfterDiscount(product));
// Expected: "A3: Mechanical Keyboard - Final price: $120" (discount is 0)


// =============================================================
// PART B: Array Destructuring
// =============================================================

const colors = ["red", "green", "blue", "yellow", "purple"];

// --- Challenge B1: Basic Array Destructuring ---
// Extract the first and second colors using destructuring.

function getFirstTwo(arr) {
  // Hint: const [first, second] = arr;
  return "";
}

console.log("B1:", getFirstTwo(colors));
// Expected: "B1: first=red, second=green"


// --- Challenge B2: Skipping Elements ---
// Extract ONLY the first and THIRD colors (skip the second).
// Hint: use a comma to skip: const [first, , third] = arr;

function getFirstAndThird(arr) {
  return "";
}

console.log("B2:", getFirstAndThird(colors));
// Expected: "B2: first=red, third=blue"


// --- Challenge B3: Rest Syntax ---
// Extract the first color, and collect the remaining ones into a new array.
// Hint: const [head, ...tail] = arr;

function splitFirst(arr) {
  return { head: "", tail: [] };
}

const result = splitFirst(colors);
console.log("B3 head:", result.head);   // Expected: "B3 head: red"
console.log("B3 tail:", result.tail);   // Expected: "B3 tail: [ 'green', 'blue', 'yellow', 'purple' ]"
