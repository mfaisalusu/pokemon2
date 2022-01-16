import React, { useState } from "react";
import { PokemonMine } from "../components/PokemonMine";
import { PokemonDetail } from "../components/PokemonDetail";
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

    const [namePokemon, setNamePokemon] = useState('');

    const pokemonDetail=(name) => {
        console.log(name);

        const nameP = name;
        setNamePokemon(nameP);
    }

    return(
        <div>
            <div className="nav">
                <nav>
                    {namePokemon ? <Link className="btn-nav-active" to="/detail"><span className="circle"></span> Pokemon Detail</Link> :  
                    <Link className="btn-nav-active" to="/pokemon3/mine"><span className="circle"></span> My Pokemon</Link> }
                </nav>
                <nav>
                    {namePokemon ? <button className="btn-nav"onClick={() => setNamePokemon('')}><span className="arrow left"></span> Back</button>   :
                    <Link className="btn-nav" to="/pokemon3">Pokemon List <span className="arrow right"></span></Link>}
                </nav>
            </div>
            { namePokemon ? 
                <div className="container">
                    <PokemonDetail namePokemon={namePokemon} />
                </div> :
                <div className="container">
                    {pokemons.length ? pokemons.map(x => <PokemonMine key={x.nickname} pokemon={x} releasePokemon={releasePokemon} pokemonDetail={pokemonDetail}/>) : <div className="empty">No Pokemon Added Yet</div>} 
                </div>
            }
            
        </div>
    )
}