import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get-pokemon-detail";
import { PokemonDetail } from "../components/PokemonDetail";
import { Link } from "react-router-dom";

export function PokemonDetailContainer({ pokemon }) {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name: pokemon.name },
    });

    return(
        <div>
            <div className="nav">
                <nav>
                    <Link to="/">Pokemon List</Link>
                    <Link to="/mine">My Pokemon</Link>
                </nav>
            </div>
            <div className="container">
                {pokemons.results && pokemons.results.map(x => <PokemonDetail key={x.url} pokemon={x}  />)}
            </div>
        </div>
    )
}