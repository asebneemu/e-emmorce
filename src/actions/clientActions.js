// src/actions/clientActions.js
import { setUser, setRoles, setTheme, setLanguage } from '../slices/clientSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Roles bilgilerini sunucudan almak için asenkron thunk
export const fetchRoles = createAsyncThunk('client/fetchRoles', async () => {
    const response = await fetch('/api/roles'); // URL'yi ihtiyaçlarınıza göre ayarlayın
    const data = await response.json();
    return data.roles; // Sunucudan gelen rol bilgileri
});

export const clientActions = {
    setUser,
    setRoles,
    setTheme,
    setLanguage,
    fetchRoles,
};
