const posts = [
	{ id: 1, title: "JS Tips", tags: ["javascript", "web"] },
	{ id: 2, title: "HTML Guide", tags: ["html", "web"] },
	{ id: 3, title: "CSS Art", tags: ["css", "design"] },
	{ id: 4, title: "React Basics", tags: ["javascript", "react"] },
];

/**
 * Goal: Return an array of all unique tags from all posts.
 */
function getUniqueTags(posts) {
	// Hint 1: Use .flatMap() to turn the nested tag arrays into one flat array.
	const tagsArr = posts.flatMap((post) => post.tags);
	// Hint 2: Use "new Set()" to remove duplicates instantly.
	const tagsSet = new Set(tagsArr);
	// Hint 3: Use the spread operator [...] to turn a Set back into an Array.
	return [...tagsSet];
}

const uniqueTags = getUniqueTags(posts);
console.log("Unique Tags found:");
console.log(uniqueTags);

/* 
EXPECTED OUTPUT:
['javascript', 'web', 'html', 'css', 'design', 'react']
*/
