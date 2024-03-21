import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Product from "./types/Product";

const initialState: Product[] = [];

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      // Example fake data
      {
        id: 1,
        images: [],
        name: "Volvo XC70, 2007",
        description: "...",
        price: 1500000,
        contacts: "...",
        options: [],
      },
    ];
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      // Handle loading state
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productsSlice.reducer;