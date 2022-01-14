import React from "react";
import { Link } from "react-router-dom";

export function PokemonMine({ pokemon }) {
    return(
        <div className="pokemon-card">
            <div className="img-container">
                <img className="img" src={pokemon.image} alt={pokemon.name} />  
            </div>
            <div className="detail-container">
                <div className="title-container">
                    <h3 className="name text-center">{pokemon.name}</h3>
                    {/* <hr className="seperator" /> */}
                </div>
                <Link className="btn-info" to="/detail">i</Link>
                <Link className="btn-transfer" to="/detail">RELEASE</Link>
            </div>
        </div>
    )
}