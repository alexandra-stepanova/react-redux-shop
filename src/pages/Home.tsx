import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { setFilters } from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import { FilterSliceFetch } from "../redux/pizza/types";
import { useSelector } from "react-redux";
import qs from "qs";
import values from "../utils/values";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Pagination from "../components/pagination/Pagination";

const Home: React.FC = () => {
  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state: any) => state.filters
  );
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const sortProperty = sortType.sortProperty;
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const status = useSelector((state: any) => state.pizzas.status);

  const getPizzas = () => {
    dispatch(
      fetchPizzas({ categoryId, sortProperty, searchValue, currentPage })
    );
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    //если выполнен первый рендер, то параметры не включаются в URL
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortProperty,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    setTimeout(() => (isMounted.current = true), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortProperty, currentPage]);

  React.useEffect(() => {
    // если параметры получены из адресной строчки, то они вшиваются в фльтры редакса
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as FilterSliceFetch;
      const sort = values.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          categoryId: params.categoryId,
          currentPage: params.currentPage,
          searchValue: params.searchValue,
          sortType: sort || values[0],
        })
      );
      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <section className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort sortType={sortType} />
          </div>
        </div>
      </section>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div>
          <p>На сервере произошла ошибка. Приносим наши извинения</p>
          <p>Попробуйте повториь попытку позже.</p>
        </div>
      ) : (
        <>
          <PizzaBlock isLoading={status === "loading"} />
          <Pagination currentPage={currentPage} />
        </>
      )}
    </main>
  );
};

export default Home;
