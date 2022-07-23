import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";

function PizzaBlock({ pizzas, isLoading }) {
  return (
    <>
      {pizzas.length ? (
        <ul className="content__items">
          {pizzas.map((pizza, index) =>
            isLoading ? (
              <PizzaSkeleton key={index} />
            ) : (
              <Pizza key={pizza.id} {...pizza} />
            )
          )}
        </ul>
      ) : (
        <p>По Вашему запросу ничего не найденно</p>
      )}
    </>
  );
}

export default PizzaBlock;
