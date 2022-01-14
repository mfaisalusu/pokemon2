import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../utils/Modal";

export function Pokemon({ pokemon }) {
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
                    {openModal ? null : <Link className="btn-info" to="/detail">i</Link>}
                    {openModal ? <Modal closeModal={setOpenModal} pokemonData={pokemon}/> : <button className="btn-transfer" onClick={() => {setOpenModal(true)}}>TRANSFER</button>}
                </div>
            </div>
        </div>
    )
}