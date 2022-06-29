import React from "react";
import Catigories from "../catigories/Catigories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizzaBlock/PizzaBlock";

function Main() {
  return (
    <main className="main">
      <section class="content">
        <div class="container">
          <div class="content__top">
        <Catigories />
        <Sort />
        </div>
        </div>
      </section>
      <h2 class="content__title">Все пиццы</h2>
      <section class="content__items">
      <PizzaBlock />
      </section>
    </main>
  );
}

export default Main;
