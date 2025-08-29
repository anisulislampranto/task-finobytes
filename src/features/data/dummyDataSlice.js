import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.json";
import merchants from "../../data/merchants.json";
import purchases from "../../data/purchases.json";

const initialState = {
    users,
    merchants,
    purchases,
};

const dummySlice = createSlice({
    name: "dummy",
    initialState,
    reducers: {
        approvePurchase(state, action) {
            const id = action.payload;
            const p = state.purchases.find(x => x.id === id);
            if (p) p.status = "approved";
        },
        setContributionRate(state, action) {
            const { merchantId, rate } = action.payload;
            const m = state.merchants.find(x => x.id === merchantId);
            if (m) m.contributionRate = rate;
        },
        addNotification(state, action) {
            const { merchantId, notification } = action.payload;
            const m = state.merchants.find(x => x.id === merchantId);
            if (m) m.notifications = m.notifications || [];
            m.notifications.unshift(notification);
        },
    }
});

export const { approvePurchase, setContributionRate, addNotification } = dummySlice.actions;
export default dummySlice.reducer;
