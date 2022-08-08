import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

import Body from "./components/Body";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { removeAmountAll, removeAmountSnack } from "./features/snackSlice";

export default function App() {
  const dispatch = useDispatch();
  const [queue, setQueue] = useState([]);

  function addSnackInQueue(s) {
    const snack = { ...s, ...{ id: s.d ? s.id + s.d : s.id + "22", count: 0 } };

    if ([...queue].filter((sn) => sn.id === snack.id).length) {
      setQueue(
        queue.map((sn) => (sn.id === snack.id ? { ...sn, count: sn.count + 1, cost: sn.cost + snack.cost } : sn))
      );
    } else {
      setQueue([...queue, snack]);
    }
  }

  function deleteSnackInQueue(id, count) {
    let curId = id.slice(0, -2);
    let curCount = count + 1;
    dispatch(removeAmountSnack({ curId, curCount }));
    setQueue(queue.filter((snack) => snack.id !== id));
  }

  function clearQueue() {
    dispatch(removeAmountAll());
    setQueue([]);
  }

  let total = queue.reduce((sum, cur) => sum + cur.cost, 0);

  return (
    <div className="container">
      <Header total={total} />
      <Routes>
        <Route path="/React-Snack" element={<Body addSnackInQueue={addSnackInQueue} />} />
        <Route
          path="/cart"
          element={<Cart queue={queue} deleteSnackInQueue={deleteSnackInQueue} clearQueue={clearQueue} />}
        />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
