import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }) {
    const { token, role: currentRole } = useSelector(state => state.auth);

    if (!token) {
        return <Navigate to="/login/member" replace />;
    }

    if (!role) return <Outlet />;

    const rolesAllowed = Array.isArray(role) ? role : [role];
    if (!rolesAllowed.includes(currentRole)) {
        if (currentRole === "admin") return <Navigate to="/dashboard/admin" replace />;
        if (currentRole === "merchant") return <Navigate to="/dashboard/merchant" replace />;
        if (currentRole === "member") return <Navigate to="/dashboard/member" replace />;
        return <Navigate to="/login/member" replace />;
    }

    return <Outlet />;
}
