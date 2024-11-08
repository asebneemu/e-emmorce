// src/actions/productActions.js
import { 
    setCategories, 
    setProductList, 
    setTotal, 
    setFetchState, 
    setLimit, 
    setOffset, 
    setFilter 
} from '../slices/productSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Ürün listesini sunucudan almak için asenkron thunk
export const fetchProductList = createAsyncThunk('product/fetchProductList', async (params) => {
    const response = await fetch(`/api/products?limit=${params.limit}&offset=${params.offset}`);
    const data = await response.json();
    return data; // Ürün listesi ve toplam ürün sayısı gibi bilgiler
});

export const productActions = {
    setCategories,
    setProductList,
    setTotal,
    setFetchState,
    setLimit,
    setOffset,
    setFilter,
    fetchProductList,
};
