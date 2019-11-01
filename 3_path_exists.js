const matrix = [
	[1, 0, 1, 0, 0, 1],
	[1, 0, 1, 1, 0, 0],
	[1, 0, 0, 1, 1, 0],
	[1, 1, 1, 1, 1, 1]
];


function pathExists(matrix, row = 0, col = 0)
{
	// if indexes are out of bound
	if(row < 0 || row > matrix.length - 1 || col < 0 || col > matrix[row].length - 1) {
		return false;
	}

	if(matrix[row][col] !== 1) {
		return false;
	}

	if(isLastElement(matrix, row, col)) {
		return true;
	}

	matrix[row][col] = -1;

	return pathExists(matrix, row, col + 1) || pathExists(matrix, row + 1, col);
}


function isLastElement(matrix, row, col)
{
	return row === matrix.length - 1 && col === matrix[row].length - 1; 
}


console.log(pathExists(matrix));