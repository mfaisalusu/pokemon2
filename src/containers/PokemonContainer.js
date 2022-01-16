import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";
import { Link  } from "react-router-dom";
import { PokemonDetail } from "../components/PokemonDetail";

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: 20, offset: 10 },
    });

    const [namePokemon, setNamePokemon] = useState('');

    const pokemonDetail=(name) => {
        const nameP = name;
        setNamePokemon(nameP);
    }

    return(
        <div>
            <div>
                <div className="nav">
                    <nav>
                        {namePokemon ? <Link className="btn-nav-active" to="/"><span className="circle"></span> Pokemon Detail</Link> :
                        <Link className="btn-nav-active" to="/"><span className="circle"></span> Pokemon List</Link>}
                    </nav>
                    <nav>
                        {namePokemon ? <button className="btn-nav" onClick={() => setNamePokemon('')} ><span className="arrow left"></span> Back</button> :
                        <Link className="btn-nav" to="/mine">My Pokemon <span className="arrow right"></span></Link>}
                    </nav>
                </div>
                { namePokemon ? 
                    <div className="container">
                        <PokemonDetail namePokemon={namePokemon}/> 
                    </div> : 
                    <div>
                        <div className="container">
                            {pokemons.results && pokemons.results.map(x => <Pokemon key={x.url} pokemon={x} pokemonDetail={pokemonDetail} />) } 
                        </div>
                        <div className="footer">
                            {namePokemon ? null : <button className="btn-nav-load" >Load More..</button>}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}