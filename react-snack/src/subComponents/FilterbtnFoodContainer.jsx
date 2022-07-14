import { nanoid } from "@reduxjs/toolkit";
import React from "react";

export default function FilterbtnFoodContainer({ handleChangeD, id, d }) {
  const filterBtn = [
    { id: nanoid(), value: "25" },
    { id: nanoid(), value: "35" },
    { id: nanoid(), value: "45" }
  ];
  const render = filterBtn.map((btn, i) => (
    <div className="food-block__from-radio" key={i}>
      <input
        type="radio"
        id={btn.id}
        value={btn.value}
        checked={d === btn.value}
        onChange={(e) => handleChangeD(e, id)}
      />
      <label htmlFor={btn.id}>{btn.value} см</label>
    </div>
  ));
  return <div className="food-block__selector">{render}</div>;
}
