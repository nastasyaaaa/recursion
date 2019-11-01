const matrix = [
	[1, 0, 1, 0, 0, 1],
	[1, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0],
	[1, 1, 1, 1, 1, 1]
];


function islandsCount(matrix)
{
	let count = 0;

	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			if( throughIsland(matrix, row, col) ) {
				count++;
			}
		}
	}

	return count;
}

function throughIsland(matrix, row, col)
{
	// if indexes are out of bound
	if(row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1) {
		return false;
	}

	// if element is passed or element is water
	if(matrix[row][col] !== 1) {
		return false;
	}

	// mark passed
	matrix[row][col] = -1;

	// go through siblings and mark them passed
	throughIsland(matrix, row + 1, col);
	throughIsland(matrix, row - 1, col);
	throughIsland(matrix, row, col + 1);
	throughIsland(matrix, row, col - 1);

	return true;
}

console.log(islandsCount(matrix));