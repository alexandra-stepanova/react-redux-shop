import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="notFound">
      <div className="notFound__container">
        <div className="notFound__box">
          <h1 className="notFound__status">404</h1>
          <p className="notFound__message">The page was not found</p>
        </div>
        <Link to="react-redux-shop/" className="notFound__link">
          Back to the main page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
