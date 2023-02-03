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

      if (findIfExist && findIfExist.quantity > 1) {
        state.products = filterState;
      }
    },
  },
});

export const { addToCart, removeFromBasket } = cartSlice.actions;

export default cartSlice.reducer;
