import React, { useState } from "react";
import { PokemonMine } from "../components/PokemonMine";
import { PokemonDetail } from "../components/PokemonDetail";
import { Link } from "react-router-dom";
import { css } from '@emotion/css'

const circle = css`
height: 10px;
width: 10px;
background-color: #555;
border-radius: 50%;
display: inline-block;
`
const btnActive = css`
padding: 10px 30px;
border-radius: 10px;
border: solid;
font-weight: bold;
color: rgb(70, 67, 67);
text-decoration: none;
min-width: 60%;
cursor: default;
`

const btnDefault = css`
padding: 10px 30px;
background: linear-gradient(to right, #f0a855, #fc7a01);
border-radius: 25px;
border: none;
color: #fff;
text-decoration: none;
min-width: 60%;
cursor: pointer;  
`

const navTop = css`
margin-top: 8%;
`

const nav = css`
display: flex;
max-width: 900px;
margin:auto;
flex-wrap: wrap;
justify-content: space-around;
`

const arrowRight = css`
border: solid #fff;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
`

const arrowLeft = css`
border: solid #fff;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);`

const container = css`
display: flex;
max-width: 900px;
margin:auto;
flex-wrap: wrap;
justify-content: space-evenly;`

const empty = css`
background-color: #ffffff;
margin-top: 10%;
padding: 10px;
border-radius: 10px;`



const getDataPokemons=() => {
    const data = localStorage.getItem('pokemons');
    if(data){
        return JSON.parse(data);
    }else {
        return []
    }
}

export function PokemonMineContainer() {

    const [pokemons, setPokemons] = useState(getDataPokemons([]));

    const releasePokemon=(nickname) => {
        console.log(nickname);
        const filteredPokemon=pokemons.filter((element, index)=>{
            return element.nickname !== nickname
        });
        setPokemons(filteredPokemon);
        localStorage.setItem('pokemons', JSON.stringify(filteredPokemon));
    }

    const [namePokemon, setNamePokemon] = useState('');

    const pokemonDetail=(name) => {
        console.log(name);

        const nameP = name;
        setNamePokemon(nameP);
    }

    return(
        <div>
            <div className={nav}>
                <nav className={navTop}>
                    {namePokemon ? <Link className={btnActive} to="/detail"><span className={circle}></span> Pokemon Detail</Link> :  
                    <Link className={btnActive} to="/pokemon3/mine"><span className={circle}></span> My Pokemon</Link> }
                </nav>
                <nav className={navTop}>
                    {namePokemon ? <button className={btnDefault} onClick={() => setNamePokemon('')}><span className={arrowLeft}></span> Back</button>   :
                    <Link className={btnDefault} to="/pokemon3">Pokemon List <span className={arrowRight}></span></Link>}
                </nav>
            </div>
            { namePokemon ? 
                <div className={container}>
                    <PokemonDetail namePokemon={namePokemon} />
                </div> :
                <div className={container}>
                    {pokemons.length ? pokemons.map(x => <PokemonMine key={x.nickname} pokemon={x} releasePokemon={releasePokemon} pokemonDetail={pokemonDetail}/>) : <div className={empty}>No Pokemon Added Yet</div>} 
                </div>
            }
            
        </div>
    )
}