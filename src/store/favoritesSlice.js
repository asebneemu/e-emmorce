import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],  // Favorilere eklenen ürünler
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteItems.push(action.payload);  // Ürünü favorilere ekle
    },
    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload);  // Ürünü favorilerden çıkar
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
