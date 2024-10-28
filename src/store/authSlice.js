// src/store/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {
        firstName: "",
        lastName: "",
        email: "",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            console.log("Giriş yapıldı, isLoggedIn durumu:", state.isLoggedIn);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = { firstName: "", lastName: "", email: "" };
            localStorage.setItem("isLoggedIn", "false");
            localStorage.removeItem("currentUser");
            console.log("Çıkış yapıldı, isLoggedIn durumu:", state.isLoggedIn);
        },
        updateUser: (state, action) => { // 4.1 Kullanıcı bilgilerini güncellemek için updateUser action'ı eklendi
            state.currentUser = { ...state.currentUser, ...action.payload };
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser)); // 4.1 localStorage güncellemesi yapıldı
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions; // 4.1 updateUser export edildi
export default authSlice.reducer;
