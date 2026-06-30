// ============================================================
// 04-dynamic-keys | Exercise 1: Dynamic Keys & Values
// ============================================================
// The rule is simple but easy to forget:
//   obj.key    → always looks for a property literally named "key"
//   obj[key]   → looks for a property named by WHATEVER is inside the variable
//
// Example:
//   const field = "name";
//   user.field    ❌ → looks for a property called "field" (probably undefined!)
//   user[field]   ✅ → looks for a property called "name"
// ============================================================

const user = {
	id: 1,
	name: "Alice",
	age: 30,
	city: "Tel Aviv",
};

// ============================================================
// CHALLENGE 1: Dynamic Reading
// ============================================================
// You receive the field name as a variable, not hardcoded.
// Return the value of that field from the user object.

function getField(obj, field) {
	// Your code here!
	return obj[field];
}

console.log("--- Challenge 1: Dynamic Reading ---");
console.log(getField(user, "name")); // Expected: Alice
console.log(getField(user, "city")); // Expected: Tel Aviv
console.log(getField(user, "age")); // Expected: 30

// ============================================================
// CHALLENGE 2: Dynamic Writing
// ============================================================
// You receive a key and value as variables.
// Add or update that key on the object and return the updated object.
// Hint: Don't mutate the original! Use the spread operator to return a new object.

function setField(obj, key, value) {
	// Your code here!
	const newObj = { ...obj };
	newObj[key] = value;
	return newObj;
}

console.log("\n--- Challenge 2: Dynamic Writing ---");
console.log(setField(user, "city", "Haifa")); // Expected: { ..., city: 'Haifa' }
console.log(setField(user, "isAdmin", true)); // Expected: { ..., isAdmin: true }
console.log(user); // Expected: UNCHANGED — we didn't mutate the original

// ============================================================
// CHALLENGE 3: Computed Property Names
// ============================================================
// You can also use a variable as a key when CREATING an object.
// This is called a "Computed Property Name" and uses [] in the object literal.
//
// Example:
//   const key = "score";
//   const obj = { [key]: 100 }; → { score: 100 }
//
// Build a function that takes a key and value and returns
// an object with that single property.

function makeObject(key, value) {
	// Your code here!
	const obj = { [key]: value };
	return obj;
}

console.log("\n--- Challenge 3: Computed Property Names ---");
console.log(makeObject("language", "JavaScript")); // Expected: { language: 'JavaScript' }
console.log(makeObject("count", 42)); // Expected: { count: 42 }

// ============================================================
// CHALLENGE 4: Building from an Array of Keys
// ============================================================
// Given an array of keys and a source object,
// return a NEW object containing only those keys (and their values).
// This pattern is called "picking" properties.

const source = { a: 1, b: 2, c: 3, d: 4 };

function pick(obj, keys) {
	// Hint: Use .reduce() — for each key, add it to the accumulator object.
	// Remember the computed property name trick from Challenge 3!
	const newObj = keys.reduce((acc, cur) => {
		const val = obj[cur];
		acc[cur] = val;
		return acc;
	}, {});

	return newObj;
}

console.log("\n--- Challenge 4: Pick ---");
console.log(pick(source, ["a", "c"])); // Expected: { a: 1, c: 3 }
console.log(pick(source, ["b", "d"])); // Expected: { b: 2, d: 4 }
console.log(pick(source, ["a", "b", "c"])); // Expected: { a: 1, b: 2, c: 3 }
