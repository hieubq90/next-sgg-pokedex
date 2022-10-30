import pokedex from './data/pokedex.json'

import {Pokemon} from "../types/Pokemon";

export const getAllPokemonData = ():Pokemon[] => {
    return pokedex
}

export const get100Pokemon = ():Pokemon[] => {
    return pokedex.slice(0, 100);
}

export const getAllPokemonIds = ():Number[] => {
    return pokedex.map((p) => p.id)
}

