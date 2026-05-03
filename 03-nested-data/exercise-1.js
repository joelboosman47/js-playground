// ============================================================
// 03-nested-data | Exercise 1: Safe Access & Fallbacks
// ============================================================
// When working with real API data, fields can be missing, null,
// or deeply nested. Two operators help you handle this safely:
//
//  ?.  Optional Chaining   — "give me this value, or undefined if it doesn't exist"
//  ??  Nullish Coalescing  — "use this fallback if the value is null or undefined"

// Imagine these are user profiles returned from an API.
// Some fields are missing or null — this is completely normal in real apps.

const users = [
  {
    id: 1,
    name: "Alice",
    address: {
      city: "Tel Aviv",
      zip: "61000",
    },
    subscription: {
      plan: "pro",
      renewsOn: "2025-12-01",
    },
  },
  {
    id: 2,
    name: "Bob",
    address: null,           // Bob hasn't set an address
    subscription: {
      plan: "free",
      renewsOn: null,        // Free plan has no renewal date
    },
  },
  {
    id: 3,
    name: "Charlie",
    address: {
      city: "Haifa",
      zip: "31000",
    },
    // Charlie has no subscription object at all
  },
];

// --- Challenge 1: Safe Property Access ---
// Write a function that takes a user and returns their city.
// If the city is missing for any reason, return the string "Unknown city".
//
// ⚠️  Without optional chaining, this would crash for Bob:
//      user.address.city → TypeError: Cannot read properties of null

function getCity(user) {
  // Hint: user?.address?.city ?? "Unknown city"
  return "";
}

// --- Challenge 2: Safe Nested Access ---
// Write a function that takes a user and returns their subscription plan.
// If there is no subscription at all, return "no subscription".

function getPlan(user) {
  return "";
}

// --- Challenge 3: Safe + Formatted ---
// Write a function that returns a formatted summary string for a user:
// "Alice | Plan: pro | City: Tel Aviv"
// "Bob   | Plan: free | City: Unknown city"
// "Charlie | Plan: no subscription | City: Haifa"

function getUserSummary(user) {
  const city = getCity(user);
  const plan = getPlan(user);
  return `${user.name} | Plan: ${plan} | City: ${city}`;
}

// --- Run all three ---
console.log("=== Cities ===");
users.forEach((u) => console.log(`${u.name}: ${getCity(u)}`));

console.log("\n=== Plans ===");
users.forEach((u) => console.log(`${u.name}: ${getPlan(u)}`));

console.log("\n=== Summaries ===");
users.forEach((u) => console.log(getUserSummary(u)));

/*
EXPECTED OUTPUT:
=== Cities ===
Alice: Tel Aviv
Bob: Unknown city
Charlie: Unknown city

=== Plans ===
Alice: pro
Bob: free
Charlie: no subscription

=== Summaries ===
Alice | Plan: pro | City: Tel Aviv
Bob | Plan: free | City: Unknown city
Charlie | Plan: no subscription | City: Haifa
*/
