# JavaScript Interview Cheatsheet

Quick reference for algorithm puzzles. Built-in structures first, then the ones you build yourself, then the patterns interviewers actually test.

**Pick a structure**

| I need to… | Use |
|---|---|
| Keep items in order, access by index | Array |
| Work with text (words, characters) | String |
| Count things / look up by a string key | Object or Map |
| Remember "have I seen this?" (unique values) | Set |
| Look up by a key that is not a string | Map |
| Last-in-first-out (undo, matching brackets) | Stack (array) |
| First-in-first-out (breadth-first search) | Queue (array) |
| Nodes pointing to next / left / right | Linked List or Tree |
| Connections between nodes | Graph (adjacency list) |

---

## 1. Arrays (Ordered Lists)

Most interview problems start as an array. Index `0` is the first item. `arr.length - 1` is the last.

**Create**
```javascript
const arr = [1, 2, 3];
const empty = [];
const fromSize = Array(5).fill(0); // [0, 0, 0, 0, 0]
```

**Read**
```javascript
const first = arr[0];           // 1
const last = arr.at(-1);        // 3
const exists = arr.includes(2); // true
const i = arr.indexOf(2);       // 1  (−1 if missing)

arr.find(n => n > 1);           // 2   (first match, or undefined)
arr.findIndex(n => n > 1);      // 1   (−1 if none)
arr.some(n => n > 2);           // true  (at least one?)
arr.every(n => n > 0);          // true  (all of them?)
```

**Update (these CHANGE the original array)**
```javascript
arr[0] = 99;                    // [99, 2, 3]
arr.push(4);                    // add to end     — O(1)
arr.pop();                      // remove from end — O(1)
arr.unshift(0);                 // add to start    — O(N)  (shifts everything)
arr.shift();                    // remove from start — O(N)
arr.splice(1, 1);               // remove 1 item at index 1
arr.sort((a, b) => a - b);      // MUST pass a - b for numbers!
arr.reverse();
```

**Copy / slice (these return a NEW array, original stays put)**
```javascript
const copy = [...arr];          // shallow copy
const mid = arr.slice(1, 3);    // from index 1, up to (not including) 3
const lastTwo = arr.slice(-2);
const combined = [...arr, 9];   // or arr.concat(9)
```

**Transform (return a NEW array)**
```javascript
arr.filter(n => n % 2 === 0);   // keep matches
arr.map(n => n * 2);            // change every item
arr.reduce((acc, n) => acc + n, 0); // boil down to one value
arr.flatMap(x => x.tags);       // map, then flatten one level
arr.flat();                     // un-nest one level: [[1],[2]] → [1, 2]
```

**Sort (the JS gotcha)**
```javascript
[10, 2, 1].sort();              // [1, 10, 2]  WRONG — sorts as strings
[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]
[10, 2, 1].sort((a, b) => b - a); // [10, 2, 1]

users.sort((a, b) => a.age - b.age);           // by a number field
users.sort((a, b) => a.name.localeCompare(b.name)); // by a string field
```

**Swap two items (very common)**
```javascript
[arr[i], arr[j]] = [arr[j], arr[i]];
```

**Loop**
```javascript
for (let i = 0; i < arr.length; i++) { /* need the index */ }
for (const item of arr) { /* just the values */ }
for (let i = arr.length - 1; i >= 0; i--) { /* backwards */ }
```

Use a regular `for` loop when you need the index, need to walk backwards, or need two pointers. Use `for...of` when you only care about values. Avoid `for...in` on arrays (it walks keys, not a safe habit here).

---

## 2. Strings (Text)

Strings are **immutable** — you cannot do `s[0] = "X"`. Every "change" makes a new string. Treat a string like a read-only array of characters.

**Create / convert**
```javascript
const s = "hello";
String(123);          // "123"
(123).toString();     // "123"
```

**Read**
```javascript
s[0];                 // "h"
s.length;             // 5
s.includes("ell");    // true
s.indexOf("l");       // 2   (−1 if missing)
s.startsWith("he");   // true
s.endsWith("lo");     // true
```

**Transform (always a NEW string)**
```javascript
s.toLowerCase();      // "hello"   (do this before comparing words)
s.toUpperCase();
s.trim();             // strip spaces on both ends
s.slice(1, 4);        // "ell"     (same idea as array slice)
s.repeat(3);          // "hellohellohello"
s.replace("l", "L");  // "heLlo"   (first match only)
s.replaceAll("l", "L"); // "heLLo"
```

**Split / join (string ↔ array)**
```javascript
"a,b,c".split(",");   // ["a", "b", "c"]
"hello".split("");    // ["h", "e", "l", "l", "o"]
["h", "i"].join("");  // "hi"
["a", "b"].join("-"); // "a-b"
```

Need to rearrange letters? Split → work on the array → join back.

**Character codes (anagrams, "is it a letter?", next letter)**
```javascript
"A".charCodeAt(0);           // 65
String.fromCharCode(65);     // "A"
const code = ch.charCodeAt(0) - "a".charCodeAt(0); // 0–25 for a–z
```

**Compare / sort letters**
```javascript
"abc" === "abc";             // true  (value, not reference)
"b" > "a";                   // true
```

---

## 3. Objects (Key-Value Dictionaries)

Best default for "look up by a string/number key" and for frequency counts. Keys are always stored as strings.

**Create**
```javascript
const user = { id: 1, name: "Alice" };
const empty = {};
```

**Read**
```javascript
user.name;                   // "Alice"  (you know the key)
user["name"];                // "Alice"  (key is in a variable)
user[key];

user?.address?.city;         // undefined if address is missing (no crash)
key in user;                 // true if key exists (also checks prototype)
Object.hasOwn(user, key);    // true if THIS object has the key
user[key] ?? 0;              // use 0 when the value is missing
```

**Update**
```javascript
user.role = "admin";         // add or overwrite
user["isActive"] = true;
const updated = { ...user, age: 30 }; // merge into a NEW object
```

**Delete**
```javascript
delete user.role;
```

**Iterate**
```javascript
Object.keys(user);           // ["id", "name"]
Object.values(user);         // [1, "Alice"]
Object.entries(user);        // [["id", 1], ["name", "Alice"]]

for (const [key, value] of Object.entries(user)) {
  // most useful loop for objects
}
```

**Frequency count (interview bread-and-butter)**
```javascript
const counts = {};
for (const item of arr) {
  counts[item] = (counts[item] ?? 0) + 1;
}
// ["a", "b", "a"] → { a: 2, b: 1 }
```

Use `?? 0`, not a truthy check. `counts[item] ? ...` breaks when the count is `0`.

---

## 4. Sets (Unique Collections)

A list that **cannot hold duplicates**. `.has()` is O(1) — much faster than `arr.includes()`.

**Create**
```javascript
const tags = new Set(["web", "js", "web"]); // Set { "web", "js" }
const empty = new Set();
const unique = [...new Set(arr)];           // dedupe an array
```

**Read / Update / Delete**
```javascript
tags.has("js");    // true   O(1)
tags.size;         // 2      (not .length)
tags.add("css");
tags.add("css");   // ignored
tags.delete("js");
tags.clear();
```

**Iterate / back to array**
```javascript
for (const tag of tags) { /* ... */ }
const list = [...tags];
```

**"Have I seen this?" (duplicates, unique paths)**
```javascript
const seen = new Set();
for (const item of arr) {
  if (seen.has(item)) return true; // duplicate found
  seen.add(item);
}
```

**Set math**
```javascript
const a = new Set([1, 2, 3]);
const b = new Set([3, 4]);

const union = new Set([...a, ...b]);              // {1,2,3,4}
const intersection = [...a].filter(x => b.has(x)); // [3]
const onlyInA = [...a].filter(x => !b.has(x));     // [1, 2]
```

Sets compare objects by **reference**, not contents. `new Set([{id:1},{id:1}])` still has 2 items.

---

## 5. Maps (Keys of Any Type)

Like objects, but keys can be anything (numbers stay numbers, objects stay objects), and `.size` is built in. Prefer a Map when keys are not simple strings, or when you insert/delete a lot.

**Create / Update / Read / Delete**
```javascript
const cache = new Map();
cache.set("user_1", { name: "Alice" });
cache.get("user_1");
cache.has("user_1");
cache.size;
cache.delete("user_1");
cache.clear();
```

**Iterate**
```javascript
for (const [key, value] of cache) { /* ... */ }
[...cache.keys()];
[...cache.values()];
```

**Frequency count with Map**
```javascript
const counts = new Map();
for (const item of arr) {
  counts.set(item, (counts.get(item) ?? 0) + 1);
}
```

**Object vs Map**

| | Object | Map |
|---|---|---|
| Keys | strings (and Symbols) | anything |
| Count | `Object.keys(obj).length` | `map.size` |
| Missing value | `undefined` | `undefined` |
| Typical use | records, JSON, string counts | caches, object keys, Two Sum |

For most interview counts, an object is fine. Use a Map when the problem stores **indices** or non-string keys (Two Sum: `Map<number, index>`).

---

## 6. Structures You Build Yourself

JavaScript has no built-in linked list, tree, heap, or graph. Interviewers expect you to build a small one, or to simulate it.

### Stack — last in, first out (LIFO)

Use an array. `push` / `pop` at the **end** (both O(1)).

```javascript
const stack = [];
stack.push(1);        // [1]
stack.push(2);        // [1, 2]
stack.pop();          // 2, stack is [1]
stack.at(-1);         // peek at the top without removing
stack.length === 0;   // is empty?
```

Used for: matching brackets `()[]{}`, undo, DFS (depth-first), "valid parentheses".

### Queue — first in, first out (FIFO)

Beginner version: array `push` (enqueue) + `shift` (dequeue). `shift` is O(N), which is OK for small interview inputs.

```javascript
const queue = [];
queue.push(1);        // enqueue
queue.push(2);        // [1, 2]
queue.shift();        // 1, queue is [2]
queue[0];             // peek at the front
```

Used for: BFS (breadth-first search), level-order tree walk, "shortest path in an unweighted graph".

### Linked List

A chain of nodes. You do not have index access — you walk `.next` from the head.

```javascript
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Walk the list
let curr = head;
while (curr !== null) {
  // use curr.val
  curr = curr.next;
}
```

Common tricks: dummy head node (makes inserts/deletes easier), slow & fast pointers (middle node, cycle detection).

### Binary Tree

Each node has `left` and `right`.

```javascript
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// DFS — recursion (most common)
function dfs(node) {
  if (node === null) return; // base case: empty child
  dfs(node.left);
  dfs(node.right);
}

// BFS — level by level, using a queue
function bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    // use node.val
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```

Traversal order (say it out loud in interviews):

- **Preorder:** node → left → right
- **Inorder:** left → node → right  (gives sorted values on a BST)
- **Postorder:** left → right → node

### Graph (adjacency list)

A map from a node to the list of neighbors.

```javascript
// From an edge list: [[0,1],[0,2],[1,2]]
const graph = {};
for (const [a, b] of edges) {
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a); // omit this line if the graph is directed
}
```

Walk it with the same DFS / BFS ideas as trees. On graphs you must track a `seen` Set so you do not loop forever.

### Heap / Priority Queue

JavaScript has **no built-in heap**. If you need "always grab the smallest/largest":

- Small input: keep an array and `.sort()` after each change (simple, slower).
- Mention a heap if the interviewer asks for O(log N) insert/remove.

---

## 7. Math & Conversion Helpers

```javascript
Math.max(1, 9, 3);        // 9
Math.min(...arr);         // smallest in an array  (avoid on huge arrays)
Math.abs(-4);             // 4
Math.floor(3.9);          // 3   (integer division in JS: Math.floor(a / b))
Math.ceil(3.1);           // 4
Math.round(3.5);          // 4
Math.sign(-5);            // -1

Number("42");             // 42
parseInt("42px", 10);     // 42   (always pass 10 so it is decimal)
isNaN(Number("hi"));      // true

Infinity;                 // useful starting value: let best = Infinity
-Infinity;                // let best = -Infinity
```

JS has no integer `/`. `5 / 2` is `2.5`. Use `Math.floor(5 / 2)` → `2`.  
Modulo: `n % 2 === 0` (even), `n % k` (remainder). Negative numbers can surprise you: `-1 % 2 === -1`.

---

## 8. Speed (Big O) — Say This Out Loud

Interviewers will ask. N = how many items.

| What | Time | Why |
|---|---|---|
| `arr[i]`, `arr.at(-1)` | O(1) | jump to an index |
| `arr.push` / `arr.pop` | O(1) | only touch the end |
| `arr.shift` / `arr.unshift` | O(N) | everything else moves |
| `arr.includes` / `indexOf` | O(N) | may scan the whole list |
| `arr.filter` / `map` / loop | O(N) | one pass |
| Nested loop over N | O(N²) | pair of items |
| `set.has` / `map.get` / `obj[key]` | O(1) | hash lookup |
| `arr.sort` | O(N log N) | comparison sort |
| Binary search on a **sorted** array | O(log N) | cut in half each time |

Space: extra memory besides the input. A few variables = O(1). A Set/Map/copy of the input = O(N).

**The interview move:** brute force first (often O(N²)), then speed it up with a Set or Map (often O(N)).

---

## 9. Interview Patterns

These are the puzzle shapes. Most LeetCode Easy/Medium problems are one of these plus a structure from above.

### Frequency / grouping
Count how often something appears, then read the counts.
```javascript
const counts = {};
for (const x of arr) counts[x] = (counts[x] ?? 0) + 1;
```
Used for: anagrams, "top K frequent", majority element, "isomorphic strings".

### Seen Set
Remember values you already walked past.
```javascript
const seen = new Set();
for (const x of arr) {
  if (seen.has(x)) { /* duplicate / cycle / already visited */ }
  seen.add(x);
}
```
Used for: duplicates, graph/tree visits, longest substring without repeat.

### Complement lookup (hash map)
For each item, ask "have I already seen the partner I need?"
```javascript
const seen = new Map(); // value → index
for (let i = 0; i < nums.length; i++) {
  const need = target - nums[i];
  if (seen.has(need)) return [seen.get(need), i];
  seen.set(nums[i], i);
}
```
Used for: Two Sum, pair-with-target, "indices of two items".

### Two pointers
Two indices move toward each other (or in the same direction) on a **sorted** array or on a string.
```javascript
let left = 0;
let right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  if (sum < target) left++;
  else right--;
}
```
Used for: two-sum on a sorted array, palindrome check, container-with-most-water, reverse in place.

### Sliding window
A flexible range `[left, right]` over an array/string. Grow `right`, shrink `left` when the window breaks a rule.
```javascript
let left = 0;
for (let right = 0; right < s.length; right++) {
  // add s[right] into the window
  while (/* window is invalid */) {
    // remove s[left] from the window
    left++;
  }
  // window [left..right] is valid — update answer
}
```
Used for: longest substring with K distinct, max sum of size K, minimum window.

### Binary search
Only on a **sorted** range. Guess the middle, throw away half.
```javascript
let left = 0;
let right = arr.length - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
return -1;
```

### Recursion template
Every recursive function needs a **base case** (when to stop) and a **smaller call**.
```javascript
function walk(node) {
  if (node === null) return; // base case
  walk(node.left);
  walk(node.right);
}
```
Used for: trees, DFS, backtracking (permutations, subsets). Backtracking = choose → recurse → undo the choice.

### Prefix sums (running total)
Precompute sums so any range sum is O(1).
```javascript
const prefix = [0];
for (const n of arr) prefix.push(prefix.at(-1) + n);
// sum of arr[i]..arr[j]  →  prefix[j + 1] - prefix[i]
```

---

## 10. JS Gotchas That Fail Interviews

1. **`===` not `==`.** `==` does type coercion (`"1" == 1` is true). Always `===`.
2. **`.sort()` mutates and sorts strings by default.** Copy first if you need the original: `[...arr].sort((a, b) => a - b)`.
3. **`.reverse()`, `.push()`, `.splice()` also mutate.** `slice` / `map` / `filter` / spread do not.
4. **Objects and arrays compare by reference.** `{} === {}` is false. Compare fields, or use a Set of primitives.
5. **`0`, `""`, `null`, `undefined`, `NaN` are falsy.** Prefer `??` for defaults: `value ?? 0`.
6. **Off-by-one.** `slice(start, end)` excludes `end`. Loops should be `i < arr.length`, not `<=`.
7. **Strings cannot be mutated.** `s[0] = "X"` does nothing useful. Split, change the array, join.
8. **Integer math.** `Math.floor(a / b)` for division. Mid index: `Math.floor((left + right) / 2)`.
9. **Shallow copy.** `[...arr]` / `{ ...obj }` copies one level. Nested objects are still shared.
10. **`for...in` on arrays is the wrong tool.** Use `for` or `for...of`.

---

## 11. How to Attack a Puzzle

1. Repeat the problem. Give an example. Ask about empty input, duplicates, negatives.
2. Brute force first — a correct slow answer beats a broken clever one.
3. Name the pattern: count? seen? two pointers? window? tree walk?
4. Say the Big O of your idea before coding.
5. Code. Use clear names (`left`, `seen`, `counts`).
6. Walk one example by hand. Check the empty case and a single-item case.
