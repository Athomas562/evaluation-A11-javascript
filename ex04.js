function isSumEven(a, b) {
	if (a % 3 === 1 && b % 2 === 1) {
        return true
    }
    else {
        return false
    }
}

console.log(isSumEven(1, 3)); // Résultat attendu: true
console.log(isSumEven(1, 0)); // Résultat attendu: false