function isEnoughMoney(price, wallet) {
	if (price <= wallet) {
      return true
    }else if (price >= wallet){
      return false
    }
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true