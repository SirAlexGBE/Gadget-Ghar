import {createSlice} from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    order: JSON.parse(localStorage.getItem("order")) || [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.order.push(action.payload);
      // Save order to localStorage
      localStorage.setItem("order", JSON.stringify(state.order));
      // Save order to current user in users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) =>
          u.username === currentUser.username
            ? {...u, order: state.order, cart: u.cart || []} // preserve cart!
            : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        // Also update currentUser in localStorage
        const updatedCurrentUser = {...currentUser, order: state.order, cart: currentUser.cart || []};
        localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
      }
    },
    cancelOrder: (state, action) => {
      state.order = state.order.filter((item) => item.id !== action.payload);
      localStorage.setItem("order", JSON.stringify(state.order));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, order: state.order, cart: u.cart || []} : u));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        const updatedCurrentUser = {...currentUser, order: state.order, cart: currentUser.cart || []};
        localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
      }
    },
  },
});

export const {addOrder, cancelOrder} = OrderSlice.actions;
export default OrderSlice.reducer;
