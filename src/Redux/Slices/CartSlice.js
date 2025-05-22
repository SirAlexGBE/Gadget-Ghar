import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Add item logic
      const item = action.payload;
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cart.push({...item, quantity: item.quantity || 1});
      }
      // Sync to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      // Sync to user
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: state.cart} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("currentUser", JSON.stringify({...currentUser, cart: state.cart}));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: state.cart} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
    updateCartQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: state.cart} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
      // Update users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        // Update users array
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, cart: []} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        // Update currentUser object
        const updatedCurrentUser = {...currentUser, cart: []};
        localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
      }
    },
    initializeCart: (state) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser && currentUser.cart) {
        state.cart = currentUser.cart;
      } else {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        state.cart = localCart;
      }
    },
  },
});

export const {addToCart, removeFromCart, updateCartQuantity, clearCart, initializeCart} = cartSlice.actions;
export default cartSlice.reducer;
