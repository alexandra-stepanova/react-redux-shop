import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Cart from "../cart/Cart"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes >
        <Route path="/" element={<Main/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
