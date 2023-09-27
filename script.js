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