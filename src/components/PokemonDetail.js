import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get-pokemon-detail";

export function PokemonDetail({ namePokemon }) {

    const [dataPokemons, setDataPokemons] = useState('');

    const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON_DETAIL, {
        variables: { name: namePokemon },
    });

    useEffect(() => {
        if(pokemon.id == null){
            console.log('null')
        }else {
            const id = pokemon.id
            const name = pokemon.name
            const image = pokemon.sprites.front_default
            const moves = pokemon.moves.map((x, i) => {
                return (<div className="chip">
                            <div className="chip__content">
                                {x.move.name}
                            </div>
                        </div>)
            })
            const types = pokemon.types.map((x, i) => {
                return (<div className="chip">
                            <div className="chip__content">
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
        <div className="container-detail">
            <div className="container__media">
                <img src={dataPokemons.image} alt={dataPokemons.name} />  
            </div>
            <div className="container__content">
                <div className="title-container" key={dataPokemons.id}>
                    <h3 className="name text-center">Name : {dataPokemons.name}</h3>
                    <h4>Types :</h4>
                    {dataPokemons.types}
                    <h4>Moves :</h4>
                    {dataPokemons.moves}
                </div>
            </div>
            
        </div>
    )
}