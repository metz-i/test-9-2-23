async function greet() {
    return 'hello';
}

greet().then((val) => {
    console.log('promise resolved with: ', val);
})

async function add(x, y) {
    return x + y;
}