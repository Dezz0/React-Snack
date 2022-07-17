import React from "react";
import { Link } from "react-router-dom";
import { UseInput } from "../hookValidationForm";

export default function Form() {
  const name = UseInput("", { isEmpty: true });
  const phone = UseInput("", { isEmpty: true, isPhone: true, minLength: 11 });
  const email = UseInput("", { isEmpty: true, isEmail: true });
  const city = UseInput("", { isEmpty: true });
  const street = UseInput("", { isEmpty: true });
  const house = UseInput("", { isEmpty: true });

  return (
    <div className="form__container">
      <form className="form__application">
        <div className="form__row_label">
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            type="text"
            value={name.value}
            onChange={(e) => name.onChange(e)}
            onBlur={() => name.onBlur()}
          />
          {name.isDirty && name.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
        </div>
        <div className="form__row_label">
          <label htmlFor="phone">Телефон:</label>
          <input
            id="phone"
            type="text"
            value={phone.value}
            onChange={(e) => phone.onChange(e)}
            onBlur={() => phone.onBlur()}
          />
          {phone.isDirty && phone.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
          {phone.isDirty && phone.minLengthError && !phone.phoneError && (
            <div className="form__error">Некорректный номер.</div>
          )}
        </div>
        <div className="form__row_label">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={() => email.onBlur()}
          />
          {email.isDirty && email.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
          {email.isDirty && email.emailError && <div className="form__error">Некорректный email.</div>}
        </div>
        <div className="form__row_label">
          <label htmlFor="city">Город:</label>
          <input
            id="city"
            type="text"
            value={city.value}
            onChange={(e) => city.onChange(e)}
            onBlur={() => city.onBlur()}
          />
          {city.isDirty && city.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
        </div>
        <div className="form__row_label">
          <label htmlFor="street">Улица:</label>
          <input
            id="street"
            type="text"
            value={street.value}
            onChange={(e) => street.onChange(e)}
            onBlur={() => street.onBlur()}
          />
          {street.isDirty && street.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
        </div>
        <div style={{ marginBottom: 20 }} className="form__row_label">
          <label htmlFor="house">Дом:</label>
          <input
            id="house"
            type="text"
            value={house.value}
            onChange={(e) => house.onChange(e)}
            onBlur={() => house.onBlur()}
          />
          {house.isDirty && house.isEmpty && <div className="form__error">Поле не может быть пустым.</div>}
        </div>
        <div className="form__bottom_block">
          <Link className="form__item-button-back button" to="/">
            Вернуться на главную страницу
          </Link>
          <button
            className="form__button-buy button"
            disabled={
              !name.validInput ||
              !phone.validInput ||
              !email.validInput ||
              !city.validInput ||
              !street.validInput ||
              !house.validInput
            }
            onClick={(e) => e.preventDefault()}
          >
            Оплатить сейчас
          </button>
        </div>
      </form>
    </div>
  );
}
