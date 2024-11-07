// src/store/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {
        firstName: "",
        lastName: "",
        email: "",
    },
};

// Sunucuya giriş isteği atan thunk
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://workintech-fe-ecommerce.onrender.com/login", userData);
            return response.data;
        } catch (error) {
            return rejectWithValue("Email veya şifre yanlış.");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = { firstName: "", lastName: "", email: "" };
            localStorage.setItem("isLoggedIn", "false");
            localStorage.removeItem("currentUser");
        },
        updateUser: (state, action) => {
            state.currentUser = { ...state.currentUser, ...action.payload };
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            alert(action.payload);
        });
    }
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
