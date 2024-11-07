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
            console.log("Gönderilen veriler:", userData);  // Gönderilen verileri kontrol edin
            const response = await axios.post("https://workintech-fe-ecommerce.onrender.com/login", userData);
            console.log("Sunucudan gelen yanıt:", response.data);  // Sunucudan gelen yanıtı loglayın
            return response.data;
        } catch (error) {
            console.error("Sunucu hatası:", error.response?.data || error.message);
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
            // Kullanıcı bilgilerini localStorage'a kaydediyoruz
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = { firstName: "", lastName: "", email: "" };
            // localStorage'daki kullanıcı bilgilerini temizliyoruz
            localStorage.setItem("isLoggedIn", "false");
            localStorage.removeItem("currentUser");
        },
        updateUser: (state, action) => {
            state.currentUser = { ...state.currentUser, ...action.payload };
            // Güncellenmiş kullanıcı bilgilerini localStorage'a kaydediyoruz
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            // Giriş başarılı olduğunda kullanıcı bilgilerini localStorage'a kaydediyoruz
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
