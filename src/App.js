import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ListPokemons from "./views/listPokemons";
import DetailPokemon from "./views/detailPokemon";
import MyPokemons from "./views/myPokemons";

export default function App() {
  return (
      <Router>
        <ModalSwitch />
      </Router>
  );
}

function ModalSwitch() {
  return (
      <div>
        <Switch>
          <Route exact path="/" children={<ListPokemons />} />
          <Route path="/detail/:id" children={<DetailPokemon />} />
          <Route path="/catched" children={<MyPokemons />} />
        </Switch>
      </div>
  );
}

