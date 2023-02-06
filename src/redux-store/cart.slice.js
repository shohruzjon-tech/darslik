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
      const clonedState = [...state.products];
      const findIfExist = clonedState.find((item) => item._id === payload._id);
      const filterState = clonedState.filter(
        (item) => item._id !== payload._id
      );
      state.cartAmount += 1;
      if (findIfExist) {
        state.products = [
          ...filterState,
          { ...findIfExist, quantity: findIfExist.quantity + 1 },
        ];
      } else {
        state.products.push({ ...payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, { payload }) => {
      const clonedState = [...state.products];
      const findIfExist = clonedState.find((item) => item._id === payload);
      const filterState = clonedState.filter((item) => item._id !== payload);
      state.products = filterState;
      state.cartAmount -= findIfExist.quantity;
    },
    increaseCart: (state, { payload }) => {
      const productIndex = state.products.findIndex(
        (item) => item._id === payload
      );
      if (state.products[productIndex].quantity < 10) {
        state.products[productIndex].quantity += 1;
        state.cartAmount += 1;
      }
    },
    decreaseCart: (state, { payload }) => {
      const productIndex = state.products.findIndex(
        (item) => item._id === payload
      );
      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
        state.cartAmount -= 1;
      }
    },
  },
});

export const { addToCart, removeFromBasket, decreaseCart, increaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
