// Example: src/Redux/Slices/ProductsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [], // or your initial products array
  },
  reducers: {
    // your product reducers here
  },
});

export default ProductsSlice.reducer;