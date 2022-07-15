import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";

function PizzaBlock({ pizzas, isLoading }) {
  return (
    <ul className="content__items">
      {pizzas.map((pizza) =>
        isLoading ? <PizzaSkeleton key={pizza.id} /> : <Pizza key={pizza.id} {...pizza} />
      )}
    </ul>
  );
}

export default PizzaBlock;
