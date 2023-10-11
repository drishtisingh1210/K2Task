import { combineReducers } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
  cart: cartReducer,
});

const localStorageCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

let initialState = {
  cart: {
    cartItems: localStorageCartItems,
  },
};

const middleware = [thunk];

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
