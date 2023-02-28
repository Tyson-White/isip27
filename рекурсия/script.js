const sumTo = (n) => {
	let sum = 0

	for (i = 1; i < n; i++) {
		sum += i
	}

	return (sum)
}

console.log(sumTo(5))

const sumTo2 = (n) => {

	if (n === 1) {
		return 1
	}

	return n += sumTo2(n - 1)

}

console.log(sumTo(5))

const sumTo3 = (n) => {
	return n * (n + 1) / 2;
}

console.log(sumTo3(5))