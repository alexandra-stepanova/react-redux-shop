import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";

function PizzaBlock({ pizzas, isLoading, searchValue }) {
  return (
    <ul className="content__items">
      {pizzas
        .filter((obj) =>
          obj.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((pizza, index) =>
          isLoading ? (
            <PizzaSkeleton key={index} />
          ) : (
            <Pizza key={pizza.id} {...pizza} />
          )
        )}
    </ul>
  );
}

export default PizzaBlock;
