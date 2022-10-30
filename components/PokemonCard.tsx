import React, {useMemo} from "react";
import Image from 'next/image'
import Link from 'next/link'
// import IconHeartFilled from '~icons/ant-design/heart-filled.jsx';
import IconHeartOutlined from '~icons/ant-design/heart-outlined.jsx';

import { Pokemon } from "../types/Pokemon";

const PokemonCard: React.FunctionComponent<{
    pokemon: Pokemon;
}> = ({ pokemon }) => {

    const pokemonTypes = useMemo<string[]>(() => (pokemon.types.split(', ')), [pokemon])

    return (
        <div className="w-48 p-2 mb-5 mx-4 flex flex-col border border-gray-200 rounded-md shadow-md">
            <div className="flex content-center justify-between font-light text-slate-300">
                <span>
                    { `#${pokemon.num.toString().padStart(3, '0')}` }
                </span>
                <div className="flex items-center cursor-pointer">
                    <IconHeartOutlined className="text-red-500" />
                </div>
            </div>
            <div className="relative w-40 h-44 mx-auto">
                <Image alt="sprite" src={pokemon.sprite} fill sizes="160px" />
            </div>
            <div className="font-semibold text-center text-lg text-blue-500">
                <Link href={`/${pokemon.id}`}>
                    {pokemon.name}
                </Link>
            </div>
            <div className="flex justify-center text-sm font-light">
                {pokemonTypes.map((item: string, index: number) => (
                    <>
                        <span key={`type_${index}`} className="mx-1">{item}</span>
                        {
                            index < pokemonTypes.length - 1? <span>-</span> : null
                        }
                    </>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;