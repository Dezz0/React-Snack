import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../initialState";

const initialState = {
  snacks: defaultState,
  filterBy: "Все"
};

export const snackSlice = createSlice({
  name: "snacks",
  initialState: initialState,
  reducers: {
    changeFilterBy(state, action) {
      state.filterBy = action.payload;
    },
    changeDiameter(state, action) {
      const { d, id } = action.payload;
      state.snacks.forEach((snack) => {
        if (snack.id === id) {
          const currentD = snack.d;
          snack.d = d;
          currentD - d === -10
            ? (snack.cost += 50)
            : currentD - d === -20
            ? (snack.cost += 100)
            : currentD - d === 10
            ? (snack.cost -= 50)
            : currentD - d === 20
            ? (snack.cost -= 100)
            : (snack.cost = snack.cost);
        }
      });
    },
    addAmountSnack(state, action) {
      state.snacks.forEach((snack) => {
        if (snack.id === action.payload) {
          snack.count += 1;
        }
      });
    },
    removeAmountSnack(state, action) {
      const { curId, curCount } = action.payload;
      state.snacks.forEach((snack) => {
        if (snack.id === curId) {
          snack.count -= curCount;
        }
      });
    },
    removeAmountAll(state) {
      state.snacks.forEach((snack) => {
        snack.count = 0;
      });
    }
  }
});

export const { changeFilterBy, changeDiameter, addAmountSnack, removeAmountSnack, removeAmountAll } =
  snackSlice.actions;

export const snacks = (state) => state.snacks.snacks;
export const filterBy = (state) => state.snacks.filterBy;
export default snackSlice.reducer;
