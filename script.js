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