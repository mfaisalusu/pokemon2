import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";
import { Link } from "react-router-dom";

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 20, offset: 10 },
    });

    return(
        <div>
            <div className="nav">
                <nav>
                    <Link className="btn-nav" to="/mine">My Pokemon</Link>
                </nav>
            </div>
            <div className="container">
                {pokemons.results && pokemons.results.map(x => <Pokemon key={x.url} pokemon={x} />)}
            </div>
        </div>
    )
}