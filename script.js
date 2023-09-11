// for (initialValue; whileSomething; changeExpression)

// for (let i=1; i<=10; i++) {
//     console.log(`we are on row number ${i}`)
// }

// another example
// for (let i=50; i>=0; i-=10) {
//     console.log('hello' + i)
// }

// this is an infinite loop ^

// const animals = ['lions', 'tigers', 'bears']
// 
// for (let i=0; i<=animals.length; i++) {
//     console.log(i, animals[i])
// }

// spelling something backwards
const word = 'dessert'
for (let i=word.length-1; i>=0; i--) {
    reversedWord += word[i]
}
console.log(reversedWord)
