import {configureStore} from "@reduxjs/toolkit";

import wishlistreducer from "../Slices/WishlistSlice";
import cartreducer from "../Slices/CartSlice";
import orderreducer from "../Slices/OrderSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistreducer,
    cart: cartreducer,
    order: orderreducer,
  },
});
