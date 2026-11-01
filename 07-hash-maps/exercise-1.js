// ============================================================
// 07-hash-maps | Exercise 1: Two Sum
// ============================================================
// This is one of the most common coding-interview openers.
// Interviewers use it to see if you:
//   1. Start with a working (even slow) solution
//   2. Can then improve it with a hash map
//   3. Can state time and space complexity
//
// Problem:
//   Given an array of numbers and a target, return the INDICES
//   of the two numbers that add up to the target.
//   You may assume exactly one solution exists.
//   You may not use the same element twice.
//
// Example:
//   twoSum([2, 7, 11, 15], 9)  →  [0, 1]   because 2 + 7 = 9
//   twoSum([3, 2, 4], 6)       →  [1, 2]   because 2 + 4 = 6
// ============================================================

const nums1 = [2, 7, 11, 15];
const nums2 = [3, 2, 4];
const nums3 = [3, 3];

// ------------------------------------------------------------
// Challenge 1: Brute force
// ------------------------------------------------------------
// Nested loops. Check every pair.
// Write the time and space complexity in the comments below.

function twoSumBrute(nums, target) {
	// Your code here!
}

console.log("--- Challenge 1: Brute force ---");
console.log(twoSumBrute(nums1, 9)); // Expected: [0, 1]
console.log(twoSumBrute(nums2, 6)); // Expected: [1, 2]
console.log(twoSumBrute(nums3, 6)); // Expected: [0, 1]
// Time:
// Space:

// ------------------------------------------------------------
// Challenge 2: Hash map (the interview answer)
// ------------------------------------------------------------
// Walk the array ONCE. For each number, ask:
//   "Have I already seen the complement (target - current)?"
// Store each number as you go:  Map<number, index>
//
// Hint: use a Map (see 05-maps/demo.js)
//   seen.set(value, index)
//   seen.has(value)
//   seen.get(value)

function twoSum(nums, target) {
	// Your code here!
}

console.log("\n--- Challenge 2: Hash map ---");
console.log(twoSum(nums1, 9)); // Expected: [0, 1]
console.log(twoSum(nums2, 6)); // Expected: [1, 2]
console.log(twoSum(nums3, 6)); // Expected: [0, 1]
// Time:
// Space:
