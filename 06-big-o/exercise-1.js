// ============================================================
// 06-big-o | Exercise 1: Time & Space Complexity
// ============================================================
// For each function below, write down what you think the
// Time Complexity and Space Complexity is in Big O notation.
// Example format:
// Time: O(N)
// Space: O(1)
// ============================================================

// ------------------------------------------------------------
// Challenge 1
// ------------------------------------------------------------
function logFirstTwoItems(items) {
	console.log(items[0]);
	console.log(items[1]);
}
// Time:  O(1)
// Space: O(1)

// ------------------------------------------------------------
// Challenge 2
// ------------------------------------------------------------
function containsValue(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return true;
		}
	}
	return false;
}
// Time:  O(N)
// Space: O(1)

// ------------------------------------------------------------
// Challenge 3
// ------------------------------------------------------------
function getEvens(arr) {
	const evens = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evens.push(arr[i]);
		}
	}
	return evens;
}
// Time:  O(N)
// Space: O(N)

// ------------------------------------------------------------
// Challenge 4
// ------------------------------------------------------------
function hasDuplicates(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			// Don't compare the item to itself
			if (i !== j && arr[i] === arr[j]) {
				return true;
			}
		}
	}
	return false;
}
// Time:
// Space:

// ------------------------------------------------------------
// Challenge 5 (Bonus: The Interview Favorite)
// ------------------------------------------------------------
// Same goal as Challenge 4, but using a Set.
function hasDuplicatesOptimized(arr) {
	const seen = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (seen.has(arr[i])) {
			return true;
		}
		seen.add(arr[i]);
	}
	return false;
}
// Time:
// Space:
