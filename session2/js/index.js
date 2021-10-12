"use strict";
import Teams from "./team.js";


let pokemonNames = [];
let team = "The Kanto Boys"
let html = [];

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
                            let types;
                            if (data.types.length > 1) {
                                types = `<p class="pokemonType1">${data.types[0].type.name}</p>
                                                    <p class="pokemonType2">${data.types[1].type.name}</p>`
                            } else {
                                types = `<p class="pokemonType1">${data.types[0].type.name}</p>`
                            }
                            html.push(document.getElementById("pokemonContainer").innerHTML +=
                                `
                                            <div class="pokemonBox">
                                                <img src="${data.sprites.front_default}" alt="pokemon image">
                                                <p class="pokemonID">Nr. ${data.id}</p>
                                                <h1 class="pokemonName">${data.name}</h1>
                                                <div class="pokemonTypes">
                                                    ${types}
                                                </div>
                                                <button id="pokemonButton${i}" type="button">Add to team</button>
                                            </div>
                                            `
                            );
                            if (document.getElementById("pokemonButton150")) {
                                document.getElementById("hideAll").style.display = "inline";
                                console.log(pokemonNames);
                                html;
                            }
                            document.getElementById(`pokemonButton${i}`).addEventListener("click", e => {
                                e.preventDefault();
                                console.log(e);
                            })
                        })
                }
            })
    }
}



let pokemon = new Pokemon();

// let team = new Teams();

// document.getElementById("pokemonTeam").innerHTML = team.describe();

// function refreshTeam() {

// }