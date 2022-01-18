import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";
import { Link  } from "react-router-dom";
import { PokemonDetail } from "../components/PokemonDetail";
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

const btnLoad = css`
margin-top: 20px 0px;
margin: 5px;
padding: 10px 30px;
background: linear-gradient(to right, #e9e9e9, #cacaca);
border-radius: 25px;
border: none;
font-weight: bold;
color: rgb(56, 56, 56);
text-decoration: none;
min-width: 20%;
cursor: pointer;
box-shadow: 0 0 8px rgba(0,0,0,0.1);`

const cursorDefault = css`
margin-top: 20px 0px;
margin: 5px;
padding: 10px 10px;
background: linear-gradient(to right, #e9e9e9, #cacaca);
border-radius: 25px;
border: none;
font-weight: bold;
color: rgb(56, 56, 56);
text-decoration: none;
min-width: 20%;
cursor: default;
box-shadow: 0 0 8px rgba(0,0,0,0.1);`

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

const footer = css`
display: flex;
max-width: 900px;
padding:20px;
margin:auto;
flex-wrap: wrap;
justify-content: center;`

export function PokemonContainer() {
    const [limitNumber, setLimitNumber] = useState(20);
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { limit: limitNumber, offset: 10 },
    });

    const [namePokemon, setNamePokemon] = useState('');
    const pokemonDetail=(name) => {
        const nameP = name;
        setNamePokemon(nameP);
    }

    return(
        <div>
            <div>
                <div className={nav}>
                    <nav className={navTop} >
                            {namePokemon ? <Link className={btnActive} to="/"><span className={circle}></span> Pokemon Detail</Link> :
                            <Link className={btnActive} to="/pokemon3"><span className={circle}></span> Pokemon List</Link>}
                    </nav>
                    <nav className={navTop}>
                        {namePokemon ? <button className={btnDefault} onClick={() => setNamePokemon('')} ><span className={arrowLeft}></span> Back</button> :
                        <Link className={btnDefault} to="/pokemon3/mine">My Pokemon <span className={arrowRight}></span></Link>}
                    </nav>
                </div>
                { namePokemon ? 
                    <div className={container}>
                        <PokemonDetail namePokemon={namePokemon}/> 
                    </div> : 
                    <div>
                        <div className={container}>
                            {pokemons.results && pokemons.results.map(x => <Pokemon key={x.url} pokemon={x} pokemonDetail={pokemonDetail} />) } 
                        </div>
                        <div className={footer}>
                            {namePokemon ? null : 
                            <div>
                            <span className={cursorDefault} >+ {limitNumber}</span>
                            <button className={btnLoad} onClick={() => setLimitNumber(limitNumber + 20)} >Load More..  </button>
                            <span className={cursorDefault}>- {pokemons.count - limitNumber}</span>
                            </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}