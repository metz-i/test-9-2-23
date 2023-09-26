const fullName = ({first, last}) => { // object with `first` and `last`
    return `${first} ${last}`
}
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya" // not defined in object but this is fine
}

fullName(runner)
// "Eliud Kipchoge"

function print(person) {
    const {
        first,
        last,
        title
    } = person
    console.log(`${first} ${last}, ${title}`)
}

// getting stats from an array
const getStats = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((sum, currVal) =>
        sum + currVal)
    const avg = sum / arr.length
    return {
        max, // max: max [shorthand]
        min, // min: min,
        sum, // sum : sum,
        avg, //  avg: avg
    }
}
