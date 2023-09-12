const target = Math.floor(Math.random * 10)
// setting target as a constant 

let guess = Math.floor(Math.random * 10)
// we will (prob) have multiple guesses - so we can set guess as a var

while (guess !== target) {
	console.log(`guess: ${guess} target: ${target}`)
	guess = Math.floor(Math.random * 10)
}
console.log(`guess: ${guess} target: ${target}`)
console.log(`you win!!`)