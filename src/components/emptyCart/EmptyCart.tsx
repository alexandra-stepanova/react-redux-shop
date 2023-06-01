import React from "react";
import {Link} from 'react-router-dom'
import emptyCardIcon from '../../assets/images/empty-cart.png'

const EmptyCard: React.FC = () => {
  return (
    <section className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            The cart is empty <span>😕</span>
          </h2>
          <p>
          Most likely, you haven't ordered pizza yet.
            <br />
            To order a pizza, go to the main page.
          </p>
          <img src={emptyCardIcon} alt="Empty cart" />
          <Link to="react-redux-shop/" className="button button--black">
            <span>Back</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EmptyCard;
