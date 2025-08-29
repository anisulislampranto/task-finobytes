import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, setError } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

export default function LoginAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrorState] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setErrorState("Email and password are required.");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedRole = localStorage.getItem("role");
        if (storedUser && storedRole === "admin") {
            if (storedUser.email === email && storedUser.password === password) {
                const token = "admin-token";
                dispatch(loginSuccess({ token, role: "admin", user: storedUser }));
                navigate("/dashboard/admin");
                return;
            } else {
                setErrorState("Invalid email or password.");
                dispatch(setError("Invalid email or password."));
            }
        } else {
            setErrorState("No admin registered. Please register first.");
            dispatch(setError("No admin registered."));
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="w-full py-2 rounded bg-indigo-600 text-white">
                    Login as Admin
                </button>
            </form>
            <p>Don't have any account ? <Link to={'/register/admin'} className="text-blue-600 underline">Register</Link></p>
        </div>
    );
}
