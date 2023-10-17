async function greet() {
    return 'hello';
}

greet().then((val) => {
    console.log('promise resolved with: ', val);
})

