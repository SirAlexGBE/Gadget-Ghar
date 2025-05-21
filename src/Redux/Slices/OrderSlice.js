import {createSlice} from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.order.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.order = state.order.filter((item) => item.id !== action.payload);
    },
  },
});

export const {addOrder, cancelOrder} = OrderSlice.actions;
export default OrderSlice.reducer;
