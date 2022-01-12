import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app'
  });

  return (
   <ApolloProvider client={client}>
     <main>
       <PokemonsContainer />
     </main>
   </ApolloProvider>
  );
}

export default App;
