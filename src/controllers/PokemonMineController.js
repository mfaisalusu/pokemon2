import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonMineContainer } from "../containers/PokemonMineContainer";

export function PokemonMineController({ pokemon }) {
    const client = new ApolloClient({
        uri: 'https://graphql-pokeapi.graphcdn.app'
    });

    return(
        <ApolloProvider client={client}>
            <main>
                <PokemonMineContainer />
            </main>
        </ApolloProvider>
    )
}