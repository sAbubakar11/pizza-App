import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/Cart-Slice";
import productReducer from "./reducer/Product-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    Product: productReducer,
  },
});

export default store;
