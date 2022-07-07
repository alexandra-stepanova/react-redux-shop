import React from "react";
import Pizza from "../pizza/Pizza";
import pizzas from "../../utils/pizzaDB";

function PizzaBlock() {
  return (
    <ul className="content__items">
      {pizzas.map((pizza) => {
        return (
          <Pizza
            key={pizza.id}
            name={pizza.name}
            image={pizza.imageUrl}
            sizes={pizza.sizes}
            price={pizza.price}
            types={pizza.types}
          />
        );
      })}
    </ul>
  );
}

export default PizzaBlock;
