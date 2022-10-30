import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import {get100Pokemon} from "../utils/Pokemon";
import { Pokemon } from "../types/Pokemon";

import PokemonCard from "../components/PokemonCard";

export const getStaticProps: GetStaticProps<{ pokemonData: Pokemon[] }> = () => {
    const pokemonData = get100Pokemon()

    return {
        props: {
            pokemonData,
        },
    }
}

// RFC
// const Home: React.FunctionComponent<{
//     pokemonData: Pokemon[];
// }> = ({ pokemonData }) => {

function Home({ pokemonData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <div className="">
          <Head>
              <title>Pokédex - Nuxt SGG</title>
              <meta name="description" content="A Pokédex web application which built with Nuxt 12 - SGG Mode" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex align-center">
              {/* Header */}
              {/* Pokemon grid */}
              <div className="p-2 mx-auto container flex flex-wrap justify-center">
                  {
                      pokemonData.map((pokemon: Pokemon) => (
                          <PokemonCard key={pokemon.id} pokemon={pokemon} />
                      ))
                  }
              </div>
              {/* Footer */}
          </main>
      </div>
  )
}

export default Home;