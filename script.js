// more computed properties
const addProp = (obj, k, v) => { // specifying the object, key, value to be added
    return {
        ...obj, // 
        [k]: v
    }
}

const res = addProp(team, 'happy', ':)')


// shorthand method syntax
const math = {
    blah: 'Hi',
    add(x, y) {
        return x + y
    },
    multiply(x, y) {
        return x * y
    }
}
math.add(50, 60)

// logging in example - shorthand syntax for methods within objects
const auth = {
    username: 'TommyBot',
    login() {
        console.log('logged you in')
    },
    logout() {
        console.log('goodbye')
    }
}

// `this` keyword
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickname: 'Cher',
    fullName() {
        const {
            first,
            last,
            nickname
        } = this
    console.log(`${first} ${last} AKA ${nickname}`)
    }
}