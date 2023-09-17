// map

// const texts = ['rofl', 'lmao', 'smh', 'omg']
// const caps = texts.map(function (t) {
//     return t.toUpperCase()
// })

const numbers = [20, 21, 22, 23, 24, 25, 26, 27]
const words = ['asap', 'byob', 'rsvp', 'diy']

const doubles = numbers.map(function (num) {
    return num * 2 // anonymous function inside map function parentheses (arg)
})

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n%2 === 0
    }   
})

// below example accomplishes same thing as first example
const doubles2 = [] // empty array
for (let num of numbers) {
    doubles2.push(num * 2) // adding(pushing) doubled #s from another array into the empty array
}


words.map(function(word) {
    return word.toUpperCase().split('').join('.')})