import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { PokemonMineController } from "./controllers/PokemonMineController";
import { PokemonController } from "./controllers/PokemonController";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/pokemon3" element={<PokemonController />} />
        <Route path="/pokempn3/mine" element={<PokemonMineController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
