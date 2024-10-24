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
      console.log('Removing item with ID:', action.payload);  // `id`'yi konsola yazdır
      // Sadece action.payload (id) ile eşleşmeyen ürünleri tut
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      console.log('Remaining items:', state.cartItems);  // Kalan ürünleri kontrol et
    },
  },
});

// Selector ile sepetteki ürün sayısını hesaplıyoruz
export const selectTotalItems = (state) => state.cart.cartItems.length;

// Action'ları export ediyoruz
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
