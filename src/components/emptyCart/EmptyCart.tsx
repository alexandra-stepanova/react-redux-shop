import React from "react";
import {Link} from 'react-router-dom'
import emptyCardIcon from '../../assets/images/empty-cart.png'

const EmptyCard: React.FC = () => {
  return (
    <section className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCardIcon} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EmptyCard;
