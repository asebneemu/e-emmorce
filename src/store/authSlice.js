// src/store/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // İlk başta isLoggedIn değeri localStorage'dan alınıyor, eğer yoksa false oluyor
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false, 
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
            localStorage.setItem("isLoggedIn", "true"); // Kullanıcı giriş yaptığında localStorage'ı güncelle
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            console.log("Giriş yapıldı, isLoggedIn durumu:", state.isLoggedIn);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = { firstName: "", lastName: "", email: "" }; // Kullanıcı bilgilerini sıfırla
            localStorage.setItem("isLoggedIn", "false"); // Kullanıcı çıkış yaptığında localStorage'ı güncelle
            localStorage.removeItem("currentUser");
            console.log("Çıkış yapıldı, isLoggedIn durumu:", state.isLoggedIn);
        },
        updateUser: (state, action) => {
            state.currentUser = { ...state.currentUser, ...action.payload };
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser)); // Kullanıcı bilgilerini güncelle
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions; // Giriş, çıkış ve güncelleme eylemlerini dışa aktar
export default authSlice.reducer; // Slice reducer'ını dışa aktar
