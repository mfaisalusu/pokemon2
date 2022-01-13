import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { PokemonMine } from "../components/PokemonMine";
import { Link } from "react-router-dom";

export function PokemonMineContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 20, offset: 20 },
    });

    return(
        <div>
            <div className="nav">
                <nav>
                    <Link className="btn-nav" to="/">Pokemon List</Link>
                </nav>
                <nav>
                    <Link className="btn-nav-active" to="/mine">My Pokemon</Link>
                </nav>
            </div>
            <div className="container">
                {pokemons.results && pokemons.results.map(x => <PokemonMine key={x.url} pokemon={x} />)}
            </div>
        </div>
    )
}