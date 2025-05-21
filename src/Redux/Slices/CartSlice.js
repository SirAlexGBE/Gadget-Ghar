import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        // Save cart to current user in users array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
          const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: state.cart} : u));
          localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      // Save cart to current user in users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: state.cart} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
  },
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
