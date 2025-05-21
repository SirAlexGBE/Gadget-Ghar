import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Prevent duplicates, or you can add quantity logic here
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
