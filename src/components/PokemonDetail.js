import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get-pokemon-detail";

export function PokemonDetail({ namePokemon }) {

    const { data: { pokemon = {} } = {} } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name: namePokemon },
    });

    // console.log(namePokemon);
    console.log(pokemon);
    
    return (
        <div className="pokemon">
           {pokemon.name}
        </div>
    )
}