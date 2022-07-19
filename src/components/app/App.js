import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Cart from "../cart/Cart";
import NotFound from "../notFound/NotFound";

import api from "../../utils/api";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getPizzas()
      .then((response) => {
        setPizzas(response);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setTimeout(() => setIsLoading(false), 600));
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main pizzas={pizzas} isLoading={isLoading} />}
        />
        <Route path="/cart" element={<Cart pizzas={pizzas}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
