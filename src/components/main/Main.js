import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizzaBlock/PizzaBlock";

function Main({ pizzas, isLoading, categoryId, onClickCategory }) {
  return (
    <main className="main">
      <section className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              categoryId={categoryId}
              onClickCategory={onClickCategory}
            />
            <Sort />
          </div>
        </div>
      </section>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaBlock pizzas={pizzas} isLoading={isLoading} />
    </main>
  );
}

export default Main;
