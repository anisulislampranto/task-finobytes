import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dummyReducer from "../features/data/dummyDataSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        dummy: dummyReducer,
    },
});

export default store;
