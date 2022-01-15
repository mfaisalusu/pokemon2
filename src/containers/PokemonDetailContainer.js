import React from "react";
// import { useLocation } from 'react-router-dom';
// import { useQuery } from "@apollo/react-hooks";
// import { GET_POKEMON_DETAIL } from "../graphql/get-pokemon-detail";
// import { PokemonDetail } from "../components/PokemonDetail";
import { Link } from "react-router-dom";
import { PokemonDetail } from "../components/PokemonDetail";

export function PokemonDetailContainer({ pokemon }) {
    return(
        <div>
           <div className="nav">
                <nav>
                <Link className="btn-nav-active" to="/detail"><span className="circle"></span> Pokemon Detail</Link>
                </nav>
                <nav>   
                <Link className="btn-nav" to="/mine">My Pokemon <span className="arrow right"></span></Link>
                </nav>
                <nav>   
                <Link className="btn-nav" to="/">Pokemon List <span className="arrow right"></span></Link>
                </nav>
            </div>
            <div className="container">
                <PokemonDetail />
            </div>
        </div>
    )
}