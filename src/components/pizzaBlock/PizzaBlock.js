import React from "react";
import Pizza from "../pizza/Pizza";
import pizzas from "../../utils/pizzaDB";

function PizzaBlock() {
  return (
    <ul className="content__items">
      {pizzas.map((pizza) => {
        return (
          <Pizza
            {...pizza}
          />
        );
      })}
    </ul>
  );
}

export default PizzaBlock;
