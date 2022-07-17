import React from "react";

export default function FilterBySnack({ filterBySnacks, handleChangeFilterSnacks }) {
  const filterBtn = [
    { id: 0, value: "Все" },
    { id: 1, value: "Пицца" },
    { id: 2, value: "Бургеры" },
    { id: 3, value: "Закуски" },
    { id: 4, value: "Десерты" },
    { id: 5, value: "Напитки" }
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
