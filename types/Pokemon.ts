export type Pokemon = {
    id: number;
    num: number;
    name: string;
    sprite: string;
    image: string;
    types: string;
    species: string;
    height: number;
    weight: number;
    evolution: string;
    weaknesses: string;
    hp: number;
    attack: number;
    defense: number;
    sp_attack: number;
    sp_defense: number;
    speed: number;
    total: number;
}

export type PokemonShort = {
    id: number;
    num: number;
    name: string;
    sprite: string;
    types: string;
}
