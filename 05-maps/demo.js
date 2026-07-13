// ============================================================
// 05-maps | Map vs Object Demo
// ============================================================

// 1. The Limitation of Objects
// Object keys MUST be strings (or Symbols).
// If you pass a number or an object as a key, JS automatically converts it to a string!
const obj = {};
obj[123] = "Number key"; // 123 becomes "123"
console.log(obj["123"]); // "Number key"

const someObject = { id: 1 };
const anotherObject = { id: 2 };

const weirdObj = {};
weirdObj[someObject] = "First object";
weirdObj[anotherObject] = "Second object";

// Wait, what happens here?
console.log("\n--- Object Keys Gotcha ---");
console.log(weirdObj);
// Output: { '[object Object]': 'Second object' }
// Because JS turned both objects into the string "[object Object]", the second one overwrote the first!

// 2. The Power of Maps
// A Map allows ANYTHING to be a key. Functions, arrays, objects, numbers.
console.log("\n--- Enter The Map ---");
const userCache = new Map();

// Let's use the actual objects as keys this time!
userCache.set(someObject, "First object data");
userCache.set(anotherObject, "Second object data");

console.log(userCache.get(someObject)); // "First object data"
console.log(userCache.get(anotherObject)); // "Second object data"

// 3. Map Built-in Superpowers
console.log("\n--- Map Methods ---");
const myMap = new Map();

// .set() adds data (you can even chain them!)
myMap.set("a", 1).set("b", 2).set("c", 3);

// .size gives you the count instantly (Objects don't have this, you have to do Object.keys(obj).length)
console.log("Size:", myMap.size); // 3

// .has() checks if a key exists very quickly
console.log("Has 'b'?:", myMap.has("b")); // true

// .delete() removes a key
myMap.delete("b");
console.log("Size after delete:", myMap.size); // 2

// 4. My own tests
console.log("\n--- My tests ---");
console.log(userCache);
const joelMap = new Map().set(myMap, userCache);
console.log(joelMap);
