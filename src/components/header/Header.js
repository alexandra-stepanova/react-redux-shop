import React from "react";
import {Link} from "react-router-dom"

function Headers() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src="#" alt="header__logo" />
        </div>
        <div className="header__title">
            <h1>React Pizza</h1>
            <p>Самая вкусная пицца</p>
        </div>
      </div>
      <div className="header__cart">
        <Link href="#" className="button button__cart">
            <span>520 р</span>
            <div className="button__delimiter"></div>
            <svg></svg>
            <span>3</span>
        </Link>
      </div>
    </header>
  );
}

export default Headers;
