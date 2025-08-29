import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";

export default function LoginMerchant() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [storeName, setStoreName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!storeName || !password) return;
        const token = "merchant-token";
        dispatch(loginSuccess({ token, role: "merchant", user: { storeName, email } }));
        navigate("/dashboard/merchant");
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Merchant Login / Register</h2>
            <form onSubmit={submit} className="space-y-3">
                <input className="w-full p-2 border rounded" placeholder="Store Name" value={storeName} onChange={e => setStoreName(e.target.value)} />
                <input className="w-full p-2 border rounded" placeholder="Store Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="w-full p-2 border rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="w-full py-2 rounded bg-green-600 text-white">Enter as Merchant</button>
            </form>
        </div>
    );
}
