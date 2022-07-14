import { nanoid } from "@reduxjs/toolkit";
import React from "react";

export default function FilterBySnack({ filterBySnacks, handleChangeFilterSnacks }) {
  const filterBtn = [
    { id: nanoid(), value: "Пицца" },
    { id: nanoid(), value: "Бургеры" },
    { id: nanoid(), value: "Закуски" },
    { id: nanoid(), value: "Десерты" },
    { id: nanoid(), value: "Напитки" }
  ];
  const render = filterBtn.map((btn, i) => (
    <div className="header__filter-btn" key={i}>
      <input
        type="radio"
        id={btn.id}
        value={btn.value}
        checked={btn.value === filterBySnacks}
        onChange={(e) => handleChangeFilterSnacks(e.target.value)}
      />
      <label htmlFor={btn.id}>{btn.value}</label>
    </div>
  ));
  return <div className="header__filter-btn-container">{render}</div>;
}
