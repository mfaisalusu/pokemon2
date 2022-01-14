import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
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

    const [pokemons, setPokemons]=useState(getDataPokemons());

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
                {/* {pokemons.results && pokemons.results.map(x => <PokemonMine key={x.url} pokemon={x} />)} */}
                {pokemons.length < 1 ? <div>asd</div> : pokemons.length}
            </div>
        </div>
    )
}