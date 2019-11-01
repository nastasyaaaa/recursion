//Вычислить 10е число ряда Фибоначчи

// simple recursion
function getFibonacciNum(n = 10) 
{
	if(n <= 1) {
		return 0;
	}else if(n === 2) {
		return 1;
	}


	return getFibonacciNum(n - 1) + getFibonacciNum(n - 2);
}


// 0 1 1 2 3 5 8 13 21 34 55

function getFibonacciNumTail(n = 10, prevPrev = 0, prev = 1)
{
	if(n === 1){
		return prevPrev;
	}


	return getFibonacciNumTail(n - 1, prev, prevPrev + prev)
}

console.log(getFibonacciNumTail());