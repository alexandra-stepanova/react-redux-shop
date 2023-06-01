import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";
import { useSelector } from "react-redux";

type PizzaBlocktypes = {
  isLoading: boolean;
};

const PizzaBlock: React.FC<PizzaBlocktypes> = ({ isLoading }) => {
  const pizzas = useSelector((state: any) => state.pizzas.pizzas);

  return (
    <>
      {pizzas.length ? (
        <ul className={pizzas.length > 2 ? "content__items" : "content__pizzas"}>
          {pizzas.map((pizza: any, index: number) =>
            isLoading ? (
              <PizzaSkeleton key={index} />
            ) : (
              <Pizza key={pizza.id} {...pizza} />
            )
          )}
        </ul>
      ) : (
        <p className="content__items">Nothing was found</p>
      )}
    </>
  );
};

export default PizzaBlock;
