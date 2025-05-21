import {createSlice} from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
        // Save to localStorage
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, wishlist: state.wishlist} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      // Save to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, wishlist: state.wishlist} : u));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    },
  },
});

export const {addToWishlist, removeFromWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
