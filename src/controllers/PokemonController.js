import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonContainer } from "../containers/PokemonContainer";

export function PokemonController({ pokemon }) {
    const client = new ApolloClient({
        uri: 'https://graphql-pokeapi.graphcdn.app'
    });

    return(
        <ApolloProvider client={client}>
            <main>
                <PokemonContainer />
            </main>
        </ApolloProvider>
    )
}