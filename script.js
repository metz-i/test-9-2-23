axios
    .get('https://swapi.co/api/planeasjdhadkt')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log('IN CATCH CALLBACK!!');
        console.log(err);
    });