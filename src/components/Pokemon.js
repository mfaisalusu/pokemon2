import React from "react";

export function Pokemon({ pokemon }) {

    return(
        <div className="pokemon-card">
            
            <div className="img-container">
                <img className="img" src={pokemon.image} alt={pokemon.name} />  
            </div>
            <div class="detail-container">
                <div className="title-container">
                    <h3 className="name text-center">{pokemon.name}</h3>
                    {/* <hr className="seperator" /> */}
                </div>
                <button className="btn-info">i</button>
                <button className="btn-transfer">TRANSFER</button> <br></br>
            </div>
        </div>

        //  <div className="pokemon">
        //     <div className="pokemon_name">
        //         <p>{pokemon.name}</p>
        //      </div>
        //      <div className="pokemon_image">
        //         <img src={pokemon.image} alt={pokemon.name} />
        //     </div>
        // <div className="menu btn">
        //         <button className="btn">Detail</button>
        //        <button className="btn">Catch</button>
        //      </div>
        //  </div>

        // <div className="column">
        //     <div className="card">
        //         <img src={pokemon.image} alt={pokemon.name} className="img" />
        //         <h1>{pokemon.name}</h1>
        //         <p><button>Catch</button></p>
        //         <p><button>Catch</button></p>
        //     </div>
        // </div>
    )
}