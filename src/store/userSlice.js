// src/store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const MAX_USERS = 10;

const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

const initialState = {
    users: getStoredUsers(),
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
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
        logoutUser: (state) => {
            state.currentUser = null;
            localStorage.removeItem("currentUser");
        },
    },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;