const movieReviews = {
    'Arrival' : 9.5,
    'Alien' : 9,
    'Amelie' : 8,
    'In Bruges' : 9
}

// printing the movie (key) + rating (value)
for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie])
}


const ratings = Object.values(movieReviews)
let total = 0 // counter

for (let score of ratings) {
    total += score
}

console.log(total /= ratings.length) // avg