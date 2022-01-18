import React, { useState } from "react";
import Modal from "../utils/Modal";
import { css } from "@emotion/css";

const pokemonCard = css`
display:flex;
flex-direction: column;
align-items: center;`

const imgContainer = css`
position: relative;
z-index: 2;
border-radius: 50%;
text-align: center;`

const img = css`
width:95%;
height: auto;
padding: 60px;`

const detailContainer = css`
display: flex;
flex-direction: column;
align-items: center;
padding:100px 30px 30px;
border-radius: 10px;
background-color: #fff;
width: 100%;
margin-top: -150px;
box-shadow: 0 0 8px rgba(0,0,0,0.3);`

const btnInfo = css`
background: linear-gradient(to right, #93c0da, #2279cb);
border-radius: 25px;
border: none;
color: #fff;
min-width: 12%;
margin-bottom: 10px;
padding-left: 7px;
padding-top: 2px;
text-decoration: none;
cursor: pointer;`

const btnTransfer = css`
margin-top: 20px 0;
padding: 10px 30px;
background: linear-gradient(to right, #9EDA93, #22CBA8);
border-radius: 25px;
border: none;
color: #fff;
min-width: 60%;
text-decoration: none;
cursor: pointer;`

const capitalize = css`
text-transform: capitalize;`

const imgContainerAfter = css`
content: '';
display: block;
border-radius: 50%;
width: 40px;
height: 25px;
left: 37%;
position: absolute;
background-color: rgba(117, 117, 117, 0.2);
box-shadow: 0 0 17px rgba(117, 117, 117, 0.5);
bottom: 72px;`

export function Pokemon({ pokemon, pokemonDetail }) {
    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
            <div className={pokemonCard}>
                <div className={imgContainer}>
                    <img className={img} src={pokemon.image} alt={pokemon.name} />  
                    <span className={imgContainerAfter}></span>
                </div>
                <div className={detailContainer}>
                    <h3 className={capitalize}>{pokemon.name}</h3>
                    {openModal ? null : <button className={btnInfo} onClick={() => pokemonDetail(pokemon.name)}>i</button>}
                    {openModal ? <Modal closeModal={setOpenModal} pokemonData={pokemon}/> : <button className={btnTransfer} onClick={() => {setOpenModal(true)}}>TRANSFER</button>}
                </div>
            </div>
        </div>
    )
}