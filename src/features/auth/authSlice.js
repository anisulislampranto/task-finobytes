import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token") || null;
const initialRole = localStorage.getItem("role") || null;
const initialUser = JSON.parse(localStorage.getItem("user") || "null");

const initialState = {
    token: initialToken,
    role: initialRole,
    user: initialUser,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        startLoading(state) { state.isLoading = true; state.error = null; },
        loginSuccess(state, action) {
            const { token, role, user } = action.payload;
            state.token = token;
            state.role = role;
            state.user = user || null;
            state.isLoading = false;
            state.error = null;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("user", JSON.stringify(user || null));
        },
        logout(state) {
            state.token = null;
            state.role = null;
            state.user = null;
            state.isLoading = false;
            state.error = null;
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("user");
        },
        setError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const { startLoading, loginSuccess, logout, setError } = authSlice.actions;
export default authSlice.reducer;
