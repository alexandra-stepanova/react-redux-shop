import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";
import { useSelector } from "react-redux";

function PizzaBlock({ isLoading }) {
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  console.log(pizzas);
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
