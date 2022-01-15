import React, { useState } from "react";
import Modal from "../utils/Modal";

export function Pokemon({ pokemon, pokemonDetail }) {
    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
            <div className="pokemon-card">
                <div className="img-container">
                    <img className="img" src={pokemon.image} alt={pokemon.name} />  
                </div>
                <div className="detail-container">
                    <div className="title-container">
                        <h3 className="name text-center">{pokemon.name}</h3>
                    </div>
                    {openModal ? null : <button className="btn-info" onClick={() => pokemonDetail(pokemon.name)}>i</button>}
                    {openModal ? <Modal closeModal={setOpenModal} pokemonData={pokemon}/> : <button className="btn-transfer" onClick={() => {setOpenModal(true)}}>TRANSFER</button>}
                </div>
            </div>
        </div>
    )
}