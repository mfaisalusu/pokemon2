import React, { useState, useEffect } from "react";

const getDataPokemons=() => {
    const data = localStorage.getItem('pokemons');
    if(data){
        return JSON.parse(data);
    }else {
        return []
    }
}

function Modal({ closeModal , pokemonData}) {

    const [pokemons, setPokemons]=useState(getDataPokemons());

    const [nickname, setNickname]=useState('');
    const name = pokemonData.name;
    const image = pokemonData.image;
    const url = pokemonData.url;

    const handleSendSubmit=(e) => {
        e.preventDefault();
        let pokemon = {
            nickname,
            name,
            image,
            url
        }
        setPokemons([...pokemons, pokemon]);
        setNickname('');
    }

    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    },[pokemons])

    return( 
        <div className="modal">
            <button className="btn-cancel" onClick={() => {closeModal(false)}}>X</button>
            <form onSubmit={handleSendSubmit}> 
                <input placeholder="Pokemon Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                <button type="submit" className="btn-send" >Send</button>
            </form>
        </div>
    )
}

export default Modal;