// src/store/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],  // Sepetteki ürünleri tutacak state
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);  // Ürünü sepete ekle
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];  // Sepeti sıfırla
    },
    setCart: (state, action) => {
      state.cartItems = action.payload; // localStorage'dan gelen ürünleri yükle
    },
  },
});

// Selector ile sepetteki ürün sayısını hesaplıyoruz
export const selectTotalItems = (state) => state.cart.cartItems.length;

// Action'ları export ediyoruz
export const { addToCart, removeFromCart, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
