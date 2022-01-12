import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 20, offset: 20 },
    });

    return(
        <div className="pokemons">
            {pokemons.results && pokemons.results.map(x => <Pokemon key={x.url} pokemon={x} />)}
        </div>
    )
}