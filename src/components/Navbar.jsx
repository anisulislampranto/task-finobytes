import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
    const { token, role } = useSelector(s => s.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate("/login/member");
    }

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="font-bold">FinoBytes Assessment</div>
                <div className="flex items-center gap-3">
                    {!token && <>
                        <Link to="/register/admin" className="text-sm">Admin</Link>
                        <Link to="/login/merchant" className="text-sm">Merchant</Link>
                        <Link to="/login/member" className="text-sm">Member</Link>
                    </>}
                    {token && (
                        <>
                            {role === "admin" && <Link to="/dashboard/admin" className="text-sm">Dashboard</Link>}
                            {role === "merchant" && <Link to="/dashboard/merchant" className="text-sm">Dashboard</Link>}
                            {role === "member" && <Link to="/dashboard/member" className="text-sm">Dashboard</Link>}
                            <button onClick={handleLogout} className="px-3 py-1 rounded bg-red-500 text-white text-sm">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
