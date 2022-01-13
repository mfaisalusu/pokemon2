import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { PokemonDetail } from "../components/PokemonDetail";

export function PokemonDetailContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 100, offset: 20 },
    });

    return(
        <div>
            <div className="nav">

            </div>
            <div className="container">
                {pokemons.results && pokemons.results.map(x => <PokemonDetail key={x.url} pokemon={x} />)}
            </div>
        </div>
    )
}