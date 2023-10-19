// axios
//     .get('https://swapi.co/api/planeasjdhadkt')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log('IN CATCH CALLBACK!!');
//         console.log(err);
//     });

const checkStatusAndParse = (response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    
    return response.json();
};

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

