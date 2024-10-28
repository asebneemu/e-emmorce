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
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;