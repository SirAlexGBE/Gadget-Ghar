// Example: src/Redux/Slices/ProductsSlice.js
import {createSlice} from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [], // or your initial products array
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    // ...other reducers if needed
  },
});

export const {setProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;
