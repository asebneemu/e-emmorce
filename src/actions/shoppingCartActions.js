// src/actions/shoppingCartActions.js
import { 
    setCart, 
    setPayment, 
    setAddress 
} from '../slices/shoppingCartSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Ödeme işlemini sunucuda yapmak için asenkron thunk
export const processPayment = createAsyncThunk('shoppingCart/processPayment', async (paymentInfo) => {
    const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentInfo),
    });
    const data = await response.json();
    return data; // Ödeme sonuçları
});

export const shoppingCartActions = {
    setCart,
    setPayment,
    setAddress,
    processPayment,
};
