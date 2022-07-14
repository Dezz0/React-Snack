import { configureStore } from "@reduxjs/toolkit";
import snackReducer from "../features/snackSlice";

export default configureStore({
  reducer: {
    snacks: snackReducer
  }
});
