import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeFilterBy, filterBy } from "../features/snackSlice";
import FilterBySnack from "../subComponents/FilterBySnack";

export default function Header({ total }) {
    const filterBySnacks = useSelector(filterBy);
    const dispath = useDispatch();

    function handleChangeFilterSnacks(filter) {
        dispath(changeFilterBy(filter));
    }

    return (
        <div className="header__container">
            <div className="header__logo">
                <img
                    src="https://img.icons8.com/external-icongeek26-flat-icongeek26/60/null/external-pizza-mexican-food-icongeek26-flat-icongeek26.png"
                    alt="pizza_logo"
                />
                <h1>REACT-SNACK</h1>
                <span>Время перекуса!</span>
            </div>
            <div className="header__cart">
                <Link to="/cart">
                    <button className="button--cart button">
                        <span>КОРЗИНА {total}₽</span>
                    </button>
                </Link>
            </div>
            <div className="header__filter">
                <FilterBySnack filterBySnacks={filterBySnacks} handleChangeFilterSnacks={handleChangeFilterSnacks} />
            </div>
        </div>
    );
}
