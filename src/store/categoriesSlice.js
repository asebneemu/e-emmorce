import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch categories from the endpoint
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/categories');
      return response.data; // Return the categories data to be stored in Redux state
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle any errors
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        console.log("Fetched categories:", action.payload); // Veriyi konsola yazdırın
        state.status = 'succeeded';
        state.categories = action.payload; // Set categories data in state
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
      
  },
});

export default categoriesSlice.reducer;
