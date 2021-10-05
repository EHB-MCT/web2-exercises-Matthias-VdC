"use strict";



let pokemonNames = [];

class Pokemon {
    constructor() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.results.forEach(e => {
                    pokemonNames.push(e.name);
                });
                for (let i = 0; i < pokemonNames.length; i++) {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}`)
                        .then(answer => {
                            return answer.json();
                        })
                        .then(data => {
                            console.log(data);
                            let types;
                            if (data.types.length > 1) {
                                types = `<p class="pokemonType1">${data.types[0].type.name}</p>
                                                    <p class="pokemonType2">${data.types[1].type.name}</p>`
                            } else {
                                types = `<p class="pokemonType1">${data.types[0].type.name}</p>`
                            }
                            document.getElementById("pokemonContainer").innerHTML +=
                                `
                                            <div class="pokemonBox">
                                                <img src="${data.sprites.front_default}" alt="pokemon image">
                                                <p class="pokemonID">Nr. ${data.id}</p>
                                                <h1 class="pokemonName">${data.name}</h1>
                                                <div class="pokemonTypes">
                                                    ${types}
                                                </div>
                                                <a href="#">Add to team</a>
                                            </div>
                                            `
                        })
                }
            })
    }
}

let pokemon = new Pokemon();