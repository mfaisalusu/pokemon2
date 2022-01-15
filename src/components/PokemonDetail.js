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
                return (<li>{x.move.name}</li>)
            })
            const types = pokemon.types.map((x, i) => {
                return (<li>{x.type.name}</li>)
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
        <div>
             <div className="pokemon-card">
                <div className="img-container">
                    <img className="img" src={dataPokemons.image} alt={dataPokemons.name} />  
                </div>
                <div className="detail-container">
                    <div className="title-container" key={dataPokemons.id}>
                        <h3 className="name text-center">{dataPokemons.name}</h3>
                        <ul>
                          {dataPokemons.moves}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    )
}