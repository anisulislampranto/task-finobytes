import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";

export default function LoginMember() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mode, setMode] = useState("password");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");

    const fakeOtp = "123456";

    function handlePasswordLogin(e) {
        e.preventDefault();
        if (!identifier || !password) return;
        const token = "member-token";
        dispatch(loginSuccess({ token, role: "member", user: { identifier } }));
        navigate("/dashboard/member");
    }

    function sendOtp() {
        if (!identifier) return alert("enter phone or email first");
        setOtpSent(true);
        setTimeout(() => alert(`(simulated) OTP sent: ${fakeOtp}`), 300);
    }

    function verifyOtp(e) {
        e.preventDefault();
        if (otp === fakeOtp) {
            const token = "member-token";
            dispatch(loginSuccess({ token, role: "member", user: { identifier } }));
            navigate("/dashboard/member");
        } else {
            alert("wrong otp");
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Member Login</h2>

            <div className="mb-4 flex gap-2">
                <button onClick={() => setMode("password")} className={`px-3 py-1 rounded ${mode === 'password' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>Password</button>
                <button onClick={() => setMode("otp")} className={`px-3 py-1 rounded ${mode === 'otp' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>OTP</button>
            </div>

            {mode === "password" ? (
                <form onSubmit={handlePasswordLogin} className="space-y-3">
                    <input className="w-full p-2 border rounded" placeholder="Phone or Email" value={identifier} onChange={e => setIdentifier(e.target.value)} />
                    <input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="w-full py-2 rounded bg-indigo-600 text-white">Login</button>
                </form>
            ) : (
                <form onSubmit={verifyOtp} className="space-y-3">
                    <input className="w-full p-2 border rounded" placeholder="Phone or Email" value={identifier} onChange={e => setIdentifier(e.target.value)} />
                    <div className="flex gap-2">
                        <button type="button" onClick={sendOtp} className="py-2 px-3 rounded bg-yellow-500">Send OTP</button>
                        <input className="flex-1 p-2 border rounded" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
                    </div>
                    <button className="w-full py-2 rounded bg-indigo-600 text-white">Verify & Login</button>
                </form>
            )}
        </div>
    );
}
