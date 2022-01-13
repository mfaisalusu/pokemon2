import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { PokemonMine } from "../components/PokemonMine";

export function PokemonMineContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 100, offset: 20 },
    });

    return(
        <div>
            <div className="nav">

            </div>
            <div className="container">
                {pokemons.results && pokemons.results.map(x => <PokemonMine key={x.url} pokemon={x} />)}
            </div>
        </div>
    )
}