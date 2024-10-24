import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice'; // Favoriler slice'ı

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer, // Favoriler slice'ını Redux store'a ekliyoruz
  },
});

export default store;
