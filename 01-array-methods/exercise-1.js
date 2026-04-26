const usersArray = [
	{ id: "u1", name: "Alice", role: "admin" },
	{ id: "u2", name: "Bob", role: "user" },
	{ id: "u3", name: "Charlie", role: "user" },
];

function groupById(users) {
	// Your code here!
	// Remember to return your brand new object
	const result = new Object();
	users.forEach((user) => {
		result[user.id] = user;
	});

	return result;
}

// This will print your result to the terminal so you can check it!
const result = groupById(usersArray);
console.dir(result, { depth: null });

/* 
EXPECTED OUTPUT:
{
  'u1': { id: 'u1', name: 'Alice', role: 'admin' },
  'u2': { id: 'u2', name: 'Bob', role: 'user' },
  'u3': { id: 'u3', name: 'Charlie', role: 'user' }
}
*/
