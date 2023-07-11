import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: " cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCartItem = state.cartItems.find((cartItem) => {
        cartItem.id === action.payload.id;
      });
      if (!existingCartItem) {
        state.cartItems.push(action.payload);
      } else {
        existingCartItem.qauntity += action.payload.qauntity;
      }
      // const newItem = state.cartItems.map((cartItem) => {
      //   if (cartItem.id === action.payload.id) {
      //     return {
      //       ...cartItem,
      //       qauntity: (cartItem.qauntity += action.payload.qauntity),
      //     };
      //   } else {
      //     return cartItem;
      //   }
      // });
      // state.cartItems = newItem;
    },
    removeFromCart: (state, action) => {
      const newCartItem = state.cartItems.filter((cartItem) => {
        cartItem.id !== action.payload.id;
      });
      state.cartItems = newCartItem;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
