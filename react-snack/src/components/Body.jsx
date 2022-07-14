import React from "react";
import { useSelector } from "react-redux";
import { filterBy, snacks } from "../features/snackSlice";
import FoodСontainer from "../subComponents/FoodСontainer";

export default function Body({ addSnackInQueue }) {
  const allSnacks = useSelector(snacks);
  const filterBySnacks = useSelector(filterBy);

  const filtredSnacks = allSnacks.filter((snack) => snack.type === filterBySnacks);

  const render = filtredSnacks.map((snack) => (
    <FoodСontainer key={snack.id} {...snack} addSnackInQueue={addSnackInQueue} />
  ));
  return (
    <div className="body__container">
      <div className="body__title">
        <h2>{filterBySnacks}</h2>
      </div>
      <div className="body__items">{render}</div>
    </div>
  );
}
