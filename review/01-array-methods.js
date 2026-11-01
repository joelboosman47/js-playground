// ============================================================
// REVIEW 01 | Array Methods
// ============================================================
// Closed-book review. Don't peek at 01-array-methods/.
//
// Tools you'll want:
//   .filter()   keep items that pass a test
//   .map()      transform each item
//   .reduce()   boil an array down to one value (number, object, ...)
//   .flatMap()  map, then flatten one level
//   new Set()   unique values
//   [...]       spread a Set back into an array
// ============================================================

const books = [
	{ id: "b1", title: "Dune", author: "Herbert", price: 15, inStock: true },
	{ id: "b2", title: "1984", author: "Orwell", price: 12, inStock: false },
	{
		id: "b3",
		title: "Neuromancer",
		author: "Gibson",
		price: 14,
		inStock: true,
	},
	{ id: "b4", title: "Foundation", author: "Asimov", price: 15, inStock: true },
	{
		id: "b5",
		title: "Dune Messiah",
		author: "Herbert",
		price: 13,
		inStock: true,
	},
];

// ------------------------------------------------------------
// 1. Index by id
// ------------------------------------------------------------
// Return an object whose keys are book ids and values are the books.
// { b1: { id: "b1", ... }, b2: { ... }, ... }

function indexById(books) {
	// Guided round 1 — fill in the ONE line inside the loop.
	// Goal: { b1: { id: "b1", title: "Dune", ... }, b2: { ... }, ... }
	const result = {};

	for (const book of books) {
		// We have one book, e.g. { id: "b1", title: "Dune", ... }
		// We want result["b1"] to hold that whole book object.
		// Bracket notation: result[someKey] = someValue
		//
		// Fill this in: result[ ??? ] = ???
		result[book.id] = book;
	}

	return result;
}

console.log("1. indexById:");
console.dir(indexById(books), { depth: null });

// ------------------------------------------------------------
// 2. filter + map
// ------------------------------------------------------------
// Return labels for in-stock books only, formatted: "Title — $Price"
// Expected: ["Dune — $15", "Neuromancer — $14", "Foundation — $15", "Dune Messiah — $13"]

function getInStockLabels(books) {
	// Guided round 2 — two steps, you can chain them.
	//
	// Step A: .filter() keeps items where the test returns true.
	//   books.filter((book) => book.inStock)
	//   → drops 1984 (inStock: false), keeps the other four
	//
	// Step B: .map() turns each remaining book into a string.
	//   .map((book) => `...`)
	//   Want: "Dune — $15"
	//
	// Fill in the filter test and the template string:

	return books
		.filter((book) => book.inStock)
		.map((book) => {
			// return a string like "Dune — $15"
			return `${book.title} — $${book.price}`;
		});
}

console.log("\n2. getInStockLabels:");
console.log(getInStockLabels(books));

// ------------------------------------------------------------
// 3. reduce — frequency count
// ------------------------------------------------------------
// Count how many books each author has.
// Expected: { Herbert: 2, Orwell: 1, Gibson: 1, Asimov: 1 }

function countByAuthor(books) {
	// Guided round 3 — reduce builds ONE value by walking the array.
	//
	// reduce((accumulator, currentItem) => { ... }, startingValue)
	//
	// Start with {} (empty object).
	// After Dune:        { Herbert: 1 }
	// After 1984:        { Herbert: 1, Orwell: 1 }
	// After Neuromancer: { Herbert: 1, Orwell: 1, Gibson: 1 }
	// After Foundation:  { Herbert: 1, Orwell: 1, Gibson: 1, Asimov: 1 }
	// After Dune Messiah:{ Herbert: 2, Orwell: 1, Gibson: 1, Asimov: 1 }
	//
	// Each round: take the object so far (counts), look at this book,
	// add 1 for that author, RETURN the object so the next round gets it.

	return books.reduce((counts, book) => {
		const author = book.author;

		// If we've seen this author, add 1.
		// If we haven't, counts[author] is undefined — start at 1.
		//
		// Fill in ONE of these:
		//   counts[author] = ???
		//   or an if / else
		counts[author] ? (counts[author] += 1) : (counts[author] = 1);

		return counts; // don't forget this — next iteration needs the object
	}, {}); // {} is the starting value
}

console.log("\n3. countByAuthor:");
console.dir(countByAuthor(books));

// ------------------------------------------------------------
// 4. unique + total
// ------------------------------------------------------------
// Return { totalInStockValue, uniqueAuthors }
//   totalInStockValue: sum of price for in-stock books only
//   uniqueAuthors: array of unique author names (all books, any stock status)
// Expected: { totalInStockValue: 57, uniqueAuthors: ['Herbert', 'Orwell', 'Gibson', 'Asimov'] }

function getInventorySummary(books) {
	// Guided round 4 — two smaller problems, then return both.
	//
	// Part A: totalInStockValue
	//   Same idea as round 2 + 3: keep in-stock books, then add prices.
	//   15 + 14 + 15 + 13 = 57
	//
	// Part B: uniqueAuthors
	//   1. Get an array of author names (one per book)
	//   2. new Set(...) drops duplicates
	//   3. [...set] turns the Set back into an array
	//
	// Expected: { totalInStockValue: 57, uniqueAuthors: ['Herbert', 'Orwell', 'Gibson', 'Asimov'] }

	const totalInStockValue = books
		.filter((book) => book.inStock)
		.reduce((value, book) => value + book.price, 0);

	const authors = books.map((book) => book.author);
	const uniques = new Set(authors);
	const uniqueAuthors = [...uniques];

	return { totalInStockValue, uniqueAuthors };
}

console.log("\n4. getInventorySummary:");
console.dir(getInventorySummary(books));
