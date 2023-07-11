import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const productsAction = ProductSlice.actions;
