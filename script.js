function getPlanets() {
    return axios.get('https://swapi.com/api/planets')
}

getPlanets().then((res) => {
    console.log(res.data);
});
