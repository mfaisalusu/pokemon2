import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";

const modal = css`
justify-content: center;
width: 100%;`

const btnSend = css`
background: linear-gradient(to right, #9EDA93, #22CBA8);
border-radius: 25px;
border: none;
color: #fff;
min-width: 10%;
margin-bottom: 10px;
padding-left: 5px;
padding-top: 2px;
text-decoration: none;
cursor: pointer;`

const btnCancel = css`
background: linear-gradient(to right, #e45372, #f12939);
border-radius: 25px;
border: none;
color: #fff;
min-width: 10%;
margin-bottom: 10px;
margin: 3px;
padding-left: 5px;
padding-top: 2px;
text-decoration: none;
cursor: pointer;`

const input = css`
display: flex;
flex-direction: row-reverse;
border: 1px solid rgba(0, 0, 0, 0.3);`

const inputNickname = css`
max-width:155px;
height:30px;
border-color: transparent3
flex: 1;`

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
       
        if(nickname) {
            let valid = false;
            pokemons.filter((element, index)=>{
                if(element.nickname === pokemon.nickname) {
                    valid = true;
                }
                return element.nickname !== pokemon.nickname
            });

            if(valid === true) {
                alert("Nickname Already Exist")
            }else {
                setPokemons([...pokemons, pokemon]);
                setNickname('');
                alert("Pokemon Success Transfer to My Pokemon")
            }
        }else {
            alert("Please Insert Nickname Of This Pokemon")
        }
    }

    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    },[pokemons])

    return( 
        <div className={modal}>
            <form onSubmit={handleSendSubmit}> 
                <div className={input}>
                    <input className={inputNickname} placeholder="Pokemon Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>
                <button className={btnCancel} onClick={() => {closeModal(false)}}>X</button>
                <button type="submit" className={btnSend}  >Send</button>
            </form>
        </div>
    )
}

export default Modal;