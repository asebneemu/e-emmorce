// src/store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const MAX_USERS = 10; // Maksimum kullanıcı sayısı

// LocalStorage'dan kullanıcıları getirme işlevi
const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

// Başlangıç durumu: kullanıcı listesi ve mevcut kullanıcı
const initialState = {
    users: getStoredUsers(),
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Kullanıcı kaydetme işlemi
        registerUser: (state, action) => {
            if (state.users.length < MAX_USERS) {
                state.users.push(action.payload);
                state.currentUser = action.payload;
                localStorage.setItem("users", JSON.stringify(state.users));
                localStorage.setItem("currentUser", JSON.stringify(action.payload));
            } else {
                alert("Maksimum kullanıcı sınırına ulaşıldı.");
            }
        },
        // Kullanıcı giriş işlemi
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                state.currentUser = user;
                localStorage.setItem("currentUser", JSON.stringify(user));
            } else {
                alert("Kullanıcı bulunamadı veya şifre yanlış.");
            }
        },
        // Kullanıcı çıkış işlemi
        logoutUser: (state) => {
            state.currentUser = null;
            localStorage.removeItem("currentUser");
        },
        // Tüm kullanıcıları temizleme işlemi
        clearAllUsers: (state) => {
            state.users = [];
            state.currentUser = null;
            localStorage.removeItem("users");
            localStorage.removeItem("currentUser");
        },
        // Kullanıcı bilgilerini güncelleme
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            const index = state.users.findIndex((user) => user.email === updatedUser.email);
            if (index !== -1) {
                state.users[index] = updatedUser;
                state.currentUser = updatedUser;
                localStorage.setItem("users", JSON.stringify(state.users));
                localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            } else {
                alert("Kullanıcı bulunamadı.");
            }
        }
    },
});

// Aksiyonları dışa aktarma
export const { registerUser, loginUser, logoutUser, clearAllUsers, updateUser } = userSlice.actions;

// Slice'ın reducer'ını dışa aktarma
export default userSlice.reducer;
