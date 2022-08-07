import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/slices/filterSlice";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import values from "../../utils/values";
import qs from "qs";
import MainLayoyt from "../layouts/MainLayout";
import Main from "../main/Main";
import Cart from "../cart/Cart";
import NotFound from "../notFound/NotFound";

function App() {
  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state) => state.filters
  );
  const status = useSelector((state) => state.pizzas.status);
  // const [searchValue, setSearchValue] = React.useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const sortProperty = sortType.sortProperty;
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

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
      const params = qs.parse(window.location.search.substring(1));
      const sortType = values.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sortType }));
      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalCount = (items) =>
    items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="app">
      <Routes>
        <Route element={<MainLayoyt totalCount={totalCount} />}>
          <Route
            path="/"
            element={
              <Main
                isLoading={status === "loading"}
                currentPage={currentPage}
                error={status === "error"}
              />
            }
          />
          <Route path="/cart" element={<Cart totalCount={totalCount} />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
