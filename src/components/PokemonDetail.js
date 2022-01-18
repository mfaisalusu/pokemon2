import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get-pokemon-detail";
import { css } from "@emotion/css";

const container = css`
width: 100%;
align-items: flex-start;
display: flex;
background-color: #ffffff;
margin-top: 4%;
padding: 10px;
border-radius: 10px;
flex-wrap: wrap;
box-shadow: 0 0 17px rgba(117, 117, 117, 0.5);`

const media = css`
margin-right: 16px;
justify-content: center;
padding: 50px;
padding-left:15px;
width: 200px;`

const imgContainerAfter = css`
display: block;
border-radius: 50%;
width: 100px;
height: 100px;
margin-left: 40%;
background-color: rgba(117, 117, 117, 0.2);
box-shadow: 0 0 17px rgba(117, 117, 117, 0.5);`

const content = css`
flex: 1;
width: 700px;
margin: 20px;
color: rgb(65, 65, 65);
font-family: sans-serif;`

const capitalize = css`
text-transform: capitalize;`

const chip = css`
align-items: center;
display: inline-flex;
justify-content: center;
background-color: rgba(0, 0, 0, 0.1);
border-radius: 9999px;
padding: 4px 8px;
margin-right: 5px;
margin-top: 5px;`

const chipContent = css`
margin-right: 4px;`



export function PokemonDetail({ namePokemon }) {

    const [dataPokemons, setDataPokemons] = useState('');

    const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name: namePokemon },
    });

    useEffect(() => {
        if(pokemon.id != null){
            const id = pokemon.id
            const name = pokemon.name
            const image = pokemon.sprites.front_default
            const moves = pokemon.moves.map((x, i) => {
                return (<div className={chip}>
                            <div className={chipContent}>
                                {x.move.name}
                            </div>
                        </div>)
            })
            const types = pokemon.types.map((x, i) => {
                return (<div className={chip}>
                            <div className={chipContent}>
                                {x.type.name}
                            </div>
                        </div>)
            })

            let dataPokemon = {
                id,
                name,
                image,
                moves,
                types
            }
            setDataPokemons(dataPokemon);
        }
    },[pokemon])

    return (
        <div className={container}>
            <div className={media}>
                <img className={imgContainerAfter} src={dataPokemons.image} alt={dataPokemons.name} />  
            </div>
            <div className={content} key={dataPokemons.id}>
                <h3 className={capitalize}>Name : {dataPokemons.name}</h3>
                <h4>Types :</h4>
                {dataPokemons.types}
                <h4>Moves :</h4>
                {dataPokemons.moves}
            </div>
            
        </div>
    )
}