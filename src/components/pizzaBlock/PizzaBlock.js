import React from "react";
import Pizza from "../pizza/Pizza";
import Preloader from "../preloader/Preloader";

function PizzaBlock({ pizzas, isLoading }) {
  return (
    <ul className="content__items">
      {isLoading ? (
        <Preloader />
      ) : (
        pizzas.map((pizza) => {
          return <Pizza key={pizza.id} {...pizza} />;
        })
      )}
    </ul>
  );
}

export default PizzaBlock;
