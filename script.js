
// reduce function - summing
var nums = [3,4,5,6,7]

const product = nums.reduce((total, currentVal) => {
    return total * currentVal
})
// returns 2520

// 
// // reduce function - maximum
// const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64]
// const maxGrade = grades.max((max, currVal) => {
//     if (currVal > max) return currVal
//     return max
// })

// max          curr val        result
// 87           64              87
// 87           96              96
// same as:

const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

// reduce function - specifying max/accumulator parameter
const sum = [10, 5, 8, 3, 4].reduce((sum, currVal) => {
    return sum + currVal}, 1000) //start at 1000 and add the currVal

// reduce function - tally
const votes = ['y', 'x', 'y', 'y', 'y', 'x']
const results = votes.reduce((tally, voteValue) => {
    if (tally[voteValue]) {
        tally[voteValue]++
    // won't run at first but adds 1 every time thereafter 
    } else {
        tally[voteValue] = 1
    }
    return tally
}, {})

