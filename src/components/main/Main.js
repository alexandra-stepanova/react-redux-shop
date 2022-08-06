import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import Pagination from "../pagination/Pagination";

function Main({ isLoading, searchValue, currentPage }) {
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
      <PizzaBlock isLoading={isLoading} searchValue={searchValue} />
      <Pagination currentPage={currentPage} />
    </main>
  );
}

export default Main;
