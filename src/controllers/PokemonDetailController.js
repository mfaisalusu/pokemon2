import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonDetailContainer } from "../containers/PokemonDetailContainer";

export function PokemonDetailController({ pokemon }) {
    const client = new ApolloClient({
        uri: 'https://graphql-pokeapi.graphcdn.app'
    });

    return(
        <ApolloProvider client={client}>
            <main>
                <PokemonDetailContainer />
            </main>
        </ApolloProvider>
    )
}