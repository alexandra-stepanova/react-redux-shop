import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import Pagination from "../pagination/Pagination";

function Main({ pizzas, isLoading, searchValue, setCurrentPage, currentPage }) {
  return (
    <main className="main">
      <section className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
        </div>
      </section>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaBlock
        pizzas={pizzas}
        isLoading={isLoading}
        searchValue={searchValue}
      />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </main>
  );
}

export default Main;
