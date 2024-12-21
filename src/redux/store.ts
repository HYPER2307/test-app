import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filters } from "./filters/slice";
import { products } from "./products/slice";
import { sorting } from "./sorting/slice";

export const store = configureStore({
  reducer: combineReducers({
    products,
    filters,
    sorting,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
