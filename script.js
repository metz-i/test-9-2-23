
async function get3Pokemon() {
    const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    
    console.log(poke1);

    await poke1;
    await poke2;
    await poke3;

    console.log(poke1);
    
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}



get3Pokemon()
