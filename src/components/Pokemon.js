import React from "react";
import { Link } from "react-router-dom";

export function Pokemon({ pokemon }) {

    return(
        <div className="pokemon-card">
            <div className="img-container">
                <img className="img" src={pokemon.image} alt={pokemon.name} />  
            </div>
            <div class="detail-container">
                <div className="title-container">
                    <h3 className="name text-center">{pokemon.name}</h3>
                </div>
                <Link className="btn-info" to="/detail">i</Link>
                <Link className="btn-transfer" to="/detail">TRANSFER</Link>
            </div>
        </div>
        
    )
}