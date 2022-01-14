import React, { useState } from "react";
import { PokemonMine } from "../components/PokemonMine";
import { Link } from "react-router-dom";

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

    const pokemonDetail=(name) => {
        console.log(name)
    }

    return(
        <div>
            <div className="nav">
                <nav>
                    <Link className="btn-nav-active" to="/mine"><span className="circle"></span> My Pokemon</Link>
                </nav>
                <nav>
                    <Link className="btn-nav" to="/">Pokemon List <span className="arrow right"></span></Link>
                </nav>
            </div>
            <div className="container">
                {pokemons.length ? pokemons.map(x => <PokemonMine key={x.nickname} pokemon={x} releasePokemon={releasePokemon} pokemonDetail={pokemonDetail}/>) : <div className="empty">No Pokemon Added Yet</div>} 
            </div>
        </div>
    )
}