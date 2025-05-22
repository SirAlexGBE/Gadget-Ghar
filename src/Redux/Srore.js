import {configureStore} from "@reduxjs/toolkit";

import wishlistreducer from "./Slices/WishlistSlice";
import cartreducer from "./Slices/CartSlice";
import orderreducer from "./Slices/OrderSlice";
import productsReducer from "./Slices/ProductsSlice"; // <-- import
export const store = configureStore({
  reducer: {
    wishlist: wishlistreducer,
    cart: cartreducer,
    order: orderreducer,
    products: productsReducer, // <-- add this line
  },
});
