import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ queue, deleteSnackInQueue, clearQueue }) {
  const render = queue.map((snack, index) => (
    <div key={index} className="cart__item-content">
      <img
        className="food-block__image inCart"
        src={`https://316024.selcdn.ru/wiget/fe470000-906b-0025-f610-08d85635d801/${snack.id.slice(0, -2)}_Medium_.jpg`}
        alt={`${snack.title}`}
      />
      <h4>
        {snack.title} ({snack.count + 1}) {!snack.d ? "" : snack.d + " - см"}
      </h4>
      <h4 className="cart__item-price">{snack.cost} ₽</h4>
      <button onClick={() => deleteSnackInQueue(snack.id, snack.count)} className="cart__item-delete">
        X
      </button>
    </div>
  ));
  return (
    <div className="cart__container">
      {!queue.length ? (
        <div className="cart__item-empty">
          <h2>Корзина пустая</h2>
          <h3>
            Похоже, что вы ничего не купили 😕. <br />
            Для покупки перейдите на главную страницу.
          </h3>
          <img src="https://react-pizza-project.herokuapp.com/static/media/empty-cart.ceb2faf0.png" alt="empty" />
        </div>
      ) : (
        <>
          <div className="cart__item-title">
            <h2>Корзина</h2>
            <p className="cart__item-btn_clearAll" onClick={() => clearQueue()}>
              Очистить корзину
            </p>
          </div>
          <div className="cart__item-food_container">{render}</div>
        </>
      )}

      <div
        className="cart__item-button"
        style={!queue.length ? { justifyContent: "center" } : { justifyContent: "space-between" }}
      >
        <Link className="cart__item-button-back button" to="/">
          Вернуться на главную страницу
        </Link>
        <Link to="/form">
          {!queue.length ? "" : <button className="cart__item-button-buy button">Указать адрес</button>}
        </Link>
      </div>
    </div>
  );
}
