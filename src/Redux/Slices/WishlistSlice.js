import {createSlice} from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const idToAdd = action.payload;
      if (idToAdd && !state.wishlist.includes(idToAdd)) {
        state.wishlist.push(idToAdd);

        // Update localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Access directly from localStorage

        if (currentUser && currentUser.username) {
          const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, wishlist: state.wishlist} : u));
          localStorage.setItem("users", JSON.stringify(updatedUsers));
        } else {
          // Fallback for guest users or if currentUser is not set
          localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
      }
    },
    removeFromWishlist: (state, action) => {
      const idToRemove = action.payload;
      state.wishlist = state.wishlist.filter((id) => id !== idToRemove);

      // Update localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Access directly from localStorage

      if (currentUser && currentUser.username) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, wishlist: state.wishlist} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } else {
        // Fallback for guest users or if currentUser is not set
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    // This action initializes the Redux wishlist state from localStorage
    initializeWishlist: (state) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Access directly from localStorage
      let loadedWishlist = [];

      if (currentUser && currentUser.username) {
        // If a user is logged in, try to load their specific wishlist
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.username === currentUser.username);
        if (user && Array.isArray(user.wishlist)) {
          // Ensure it's an array
          loadedWishlist = user.wishlist;
        }
      } else {
        // If no user is logged in, try to load from the generic "wishlist" key
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
          try {
            const parsedWishlist = JSON.parse(storedWishlist);
            if (Array.isArray(parsedWishlist)) {
              // Ensure it's an array
              loadedWishlist = parsedWishlist;
            }
          } catch (e) {
            console.error("Error parsing wishlist from localStorage:", e);
            localStorage.removeItem("wishlist"); // Clear corrupted data
          }
        }
      }
      state.wishlist = loadedWishlist;
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.removeItem("wishlist"); // Clear generic wishlist
      // Note: This does NOT clear the user-specific wishlist in the 'users' array.
      // If you need to clear a user's wishlist on logout, handle that in your logout logic
      // within AuthContext or a separate thunk if more complex.
    },
  },
});

export const {addToWishlist, removeFromWishlist, initializeWishlist, clearWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
