import React from "react";
import Header from "../header/Header";
import Catigories from "../catigories/Catigories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizzaBlock/PizzaBlock";

function App() {
  return (
    <div className="app">
      <Header />
      <Catigories />
      <Sort />
      <PizzaBlock />
    </div>
  );
}

export default App;
