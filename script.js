const numbers = [20, 21, 22, 23, 24, 25, 26, 27 ]

numbers.forEach(function (num) { // will run the function for each num in numbers 
    console.log(num * 2)
})

books = [
    {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
    },
    {
        title: 'Good Omens',
        authors: 'F. Scott Fitzgerald',
        rating: 4.32
    }
]
// 
// books.forEach(function(book)) {
//     console.log(book.title.toUpperCase())
// }
// 
// for (let book of books) {
//     console.log(book.title.toUpperCase())
// }