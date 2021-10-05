"use strict";


export default class Teams {
    constructor(teamname) {
        this.teamname = teamname;
        this.trainername = "trainername";
        this.pokemonteam = [];
    }
    describe() {
        let description = `${[...this.pokemonteam]}`;
        return `${this.teamname} with trainer ${this.trainername} has these pokemon: ${description}`;
    }
    addPokemon(pokemon) {
        if (this.pokemonteam.length > 6) {
            
        }
    }
}