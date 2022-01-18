import React from "react";
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

const btnRelease = css`
margin-top: 20px 0;
padding: 10px 30px;
background: linear-gradient(to right, #ec5252, #fc1c1c);
border-radius: 25px;
border: none;
color: #fff;
min-width: 60%;
text-decoration: none;
cursor: pointer;`

const capitalize = css`
text-transform: capitalize;`

const subtitle = css`
padding-right: 10px;
border-right: 1px solid #eee;
margin-bottom: 10px;
flex-wrap: wrap;
font-weight: 500;
color: rgb(83, 83, 83);
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


export function PokemonMine({ pokemon, releasePokemon, pokemonDetail }) {
    return(
        <div className={pokemonCard} key={pokemon.nickname} >
            <div className={imgContainer}>
                <img className={img} src={pokemon.image} alt={pokemon.name} />  
                <span className={imgContainerAfter}></span>
            </div>
            <div className={detailContainer}>
                <h3 className={capitalize}>{pokemon.name}</h3>
                <span className={subtitle}>{pokemon.nickname}</span>

                <button className={btnInfo} onClick={() => pokemonDetail(pokemon.name)}>i</button>
                <button className={btnRelease} onClick={() => releasePokemon(pokemon.nickname)} >RELEASE</button>
            </div>
        </div>
    )
}