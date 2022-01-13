import React from "react";

export function Pokemon({ pokemon }) {
    return(
        <div className="pokemon">
            <div className="pokemon_name">
               <p>{pokemon.name}</p>
            </div>
            <div className="pokemon_image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="menu btn">
                <button className="btn">Detail</button>
                <button className="btn">Catch</button>
                {/* <p>{pokemon.url}</p> */}
            </div>
        </div>
    )
}