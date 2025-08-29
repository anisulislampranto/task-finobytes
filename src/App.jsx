import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginMerchant from "./pages/LoginMerchant";
import LoginMember from "./pages/LoginMember";

import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardMerchant from "./pages/DashboardMerchant";
import DashboardMember from "./pages/DashboardMember";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import LoginAdmin from "./pages/LoginAdmin";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login/member" replace />} />

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/login/merchant" element={<LoginMerchant />} />
          <Route path="/login/member" element={<LoginMember />} />

          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          </Route>

          <Route element={<ProtectedRoute role="merchant" />}>
            <Route path="/dashboard/merchant" element={<DashboardMerchant />} />
          </Route>

          <Route element={<ProtectedRoute role="member" />}>
            <Route path="/dashboard/member" element={<DashboardMember />} />
          </Route>

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}
