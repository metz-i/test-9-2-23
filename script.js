let movies = [
    "Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire"
]

let movie = movies.find(movie => {
    return movie.includes('Mrs.')
}) // "Mr. and Mrs. Smith"

let movie2 = movies.find(m => m.indexOf('Mrs') === 0)
// finding movie within movies where first word is "Mrs" 
// and adding it to array `movie2`
// returns "Mrs. Doubtfire"


// `every` function
const words = ['dog', 'dig', 'log', 'bag', 'wag']

words.every(word => {
    return word.length === 3
}) // tests whether every word meets condition that the length is 3 characters long
// True

words.every(word => word[0] === 'd') // False

words.every(w => {
    let last_letter = w[w.length - 1]
    return last_letter === 'g'
}) // checking if every w in words has 'g' as the last letter
// True