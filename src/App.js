import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css';

import { PokemonDetailController } from "./controllers/PokemonDetailController";
import { PokemonMineController } from "./controllers/PokemonMineController";
import { PokemonController } from "./controllers/PokemonController";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonController />} />
        <Route path="/detail" element={<PokemonDetailController />} />
        <Route path="/mine" element={<PokemonMineController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
