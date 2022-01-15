import React from "react";
import { Link } from "react-router-dom";

export function PokemonMine({ pokemon, releasePokemon, pokemonDetail }) {
    return(
        <div className="pokemon-card" key={pokemon.nickname} >
            <div className="img-container">
                <img className="img" src={pokemon.image} alt={pokemon.name} />  
            </div>
            <div className="detail-container">
                <div className="title-container">
                    <h3 className="name text-center">{pokemon.name}</h3>
                </div>
                <span className="cp-text text-center">{pokemon.nickname}</span>

                <Link className="btn-info" to="/detail">i</Link>
                <button className="btn-release" onClick={() => releasePokemon(pokemon.nickname)} >RELEASE</button>
            </div>
        </div>
    )
}