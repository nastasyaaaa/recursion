// 0 1 1 2 3 5 8 13 21 34 55

function fibonacciSum(n = 10, prevPrev = 0, prev = 1, accumulator = 0)
{
	accumulator += prevPrev;

	if(n === 1) {
		return accumulator;
	}


	return fibonacciSum(n - 1, prev, prevPrev + prev, accumulator);
}
// acc = 0 n = 5 prevPrev = 0 prev = 1
// acc = 1 n = 4 prevPrev = 1 prev = 1
// acc = 2 n = 3 prevPrev = 1 prev = 2
// acc = 4 n = 2 prevPrev = 2 prev = 3
// acc = 7 n = 1 prevPrev = 3 prev = 5

console.log(fibonacciSum(5));
