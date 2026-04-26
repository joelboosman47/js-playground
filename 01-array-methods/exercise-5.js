const votes = [
	"apple",
	"banana",
	"apple",
	"orange",
	"banana",
	"apple",
	"apple",
	"grape",
];

/**
 * Goal: Return an object with the count of each item.
 */
function countVotes(votes) {
	// Hint 1: Use .reduce() with an initial value of an empty object {}.
	// Hint 2: If the fruit doesn't exist in your object yet, start its count at 1.
	// Hint 3: If it already exists, just add 1 to the current number.

	return votes.reduce((count, fruit) => {
		count[fruit] ? count[fruit]++ : (count[fruit] = 1);

		return count;
	}, {});
}

const results = countVotes(votes);
console.log("Voting Results:");
console.dir(results);

/* 
EXPECTED OUTPUT:
{
  apple: 4,
  banana: 2,
  orange: 1,
  grape: 1
}
*/
