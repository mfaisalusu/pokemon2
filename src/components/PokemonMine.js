import React from "react";

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

                <button className="btn-info" onClick={() => pokemonDetail(pokemon.name)}>i</button>
                <button className="btn-release" onClick={() => releasePokemon(pokemon.nickname)} >RELEASE</button>
            </div>
        </div>
    )
}