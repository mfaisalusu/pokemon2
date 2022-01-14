import React, { useState } from "react";

function Modal({ closeModal }) {

    const [pokemons, setPokemons]=useState([]);

    const [nickname, setNickname]=useState('');

    const handleSendSubmit=(e) => {
        e.preventDefault();
        let pokemon = {
            nickname
        }
        setPokemons([...pokemons, pokemon]);
    }

    return( 
        <div className="modal">
            <button className="btn-cancel" onClick={() => {closeModal(false)}}>X</button>
            <form onSubmit={handleSendSubmit}> 
                <input placeholder="Pokemon Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                <button type="submit" className="btn-send">Send</button>
            </form>
        </div>
    )
}

export default Modal;