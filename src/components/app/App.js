import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/slices/filterSlice";
import values from "../../utils/values";
import qs from "qs";
import Header from "../header/Header";
import Main from "../main/Main";
import Cart from "../cart/Cart";
import NotFound from "../notFound/NotFound";
import api from "../../utils/api";

function App() {
  const { categoryId, sortType, currentPage } = useSelector(
    (state) => state.filters
  );
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const sortProperty = sortType.sortProperty;
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const fetchPizza = () => {
    api
      .getPizzas(categoryId, sortProperty, searchValue, currentPage)
      .then((res) => {
        setPizzas(res.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setTimeout(() => setIsLoading(false), 500));
  };

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizza();
    }
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortProperty, searchValue, currentPage]);

  const totalCount = (items) =>
    items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="app">
      <Header setSearchValue={setSearchValue} totalCount={totalCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              pizzas={pizzas}
              isLoading={isLoading}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/cart" element={<Cart totalCount={totalCount} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
