"use strict";


let pokemonNames = [];

class Pokemon {
    constructor() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.results);
                data.results.forEach(e => {
                    pokemonNames.push(data.results[e]);
                });
                console.log(pokemonNames);
            })
    }
}

let pokemon = new Pokemon();