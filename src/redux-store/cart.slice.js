import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart/actions",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.products.push(payload);
      state.cartAmount += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
