// const movieReviews = {
//     'Arrival' : 9.5,
//     'Alien' : 9,
//     'Amelie' : 8,
//     'In Bruges' : 9
// }

// for...of example - accessing the value 
// printing the movie (key) + rating (value)
// for (let movie of Object.keys(movieReviews)) {
   // console.log(movie, movieReviews[movie])
//}


// const ratings = Object.values(movieReviews)
// let total = 0 // counter

// for (let score of ratings) {
//     total += score
// }

// console.log(total /= ratings.length) // avg

// // for...in example

// let kenJenningsEarnings = {
//     dailyDouble : 50000,
//     tournamentOfChampions : 2500,
//     battleOfDecades : 1000
// }

// let total = 0
// for (let prop in kenJenningsEarnings) {
//     total += kenJenningsEarnings[prop]
// }

// function rollDie() {
// 	num = Math.floor(Math.random() * 6) + 1 // getting a number 1-6
// 	console.log(`rolled: ${num}`)
// }

// function throwDie(numRolls) {
//     for (let i=0; i<numRolls; i++) { 
//         // starting at roll 0, we will keep rolling till we reach the numRolls specified
//         rollDie()
//     }
// }

function sum (x,y) {
    console.log(x+y)
}

function isPurple(arr) {
    for (let color of arr) {
        if (color === "purple" || color === "magenta") {
            return true
        }
    }
    return false
}
