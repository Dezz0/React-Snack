import React from "react";
import { useDispatch } from "react-redux";
import { addAmountSnack, changeDiameter } from "../features/snackSlice";
import FilterbtnFoodContainer from "./FilterbtnFoodContainer";

export default function FoodContainer(snack) {
  const dispatch = useDispatch();

  function handleChangeD(e, id) {
    const d = e.target.value;
    dispatch(changeDiameter({ d, id }));
  }

  function handleAddSnack(id) {
    snack.addSnackInQueue(snack);
    dispatch(addAmountSnack(id));
  }

  return (
    <div className="food-block">
      <img
        className="food-block__image"
        src={`https://316024.selcdn.ru/wiget/fe470000-906b-0025-f610-08d85635d801/${snack.id}_Medium_.jpg`}
        alt={`${snack.title}`}
      />
      <h3>{snack.title}</h3>
      {!snack.d ? "" : <FilterbtnFoodContainer handleChangeD={handleChangeD} id={snack.id} d={snack.d} />}
      <div className="food-block__description">
        <p>{snack.description}</p>
      </div>
      <div className="food-block__costAndBuy">
        <p>от {snack.cost} ₽</p>
        <button
          className="food-block-btn button"
          onClick={() => handleAddSnack(snack.id)}
          disabled={snack.count === 15}
        >
          Добавить {snack.count === 0 ? "" : "(" + snack.count + ")"}
        </button>
      </div>
    </div>
  );
}
