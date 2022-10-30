import React, {useMemo} from "react";
import Image from 'next/image'

import { Pokemon } from "../types/Pokemon";

const PokemonCard: React.FunctionComponent<{
    pokemon: Pokemon;
}> = ({ pokemon }) => {

    const pokemonTypes = useMemo<string[]>(() => (pokemon.types.split(', ')), [pokemon])

    return (
        <div className="w-48 p-2 mb-5 mx-4 flex flex-col border border-gray-200 rounded-md shadow-md">
            <div className="">
                <span>{ `#${pokemon.num.toString().padStart(3, '0')}` }</span>
            </div>
            <div className="relative w-40 h-44">
                <Image alt="sprite" src={pokemon.sprite} fill />
            </div>
            <div className="">
                {pokemon.name}
            </div>
            <div className="">
                {pokemonTypes.map((item: string, index: number) => (
                    <span key={`type_${index}`}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;