import React from "react";
import { useSelector } from "react-redux";

export default function DashboardMember() {
    const authUser = useSelector(s => s.auth.user);
    const users = useSelector(s => s.dummy.users);
    const me = users.find(u => u.email === authUser?.identifier) || users[0];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Member Dashboard</h1>
            <div className="bg-white p-6 rounded shadow max-w-md">
                <h3 className="text-lg font-semibold mb-2">Points Summary</h3>
                <p className="text-4xl font-bold">{me?.points ?? 0}</p>
                <p className="text-sm text-gray-500 mt-2">{me ? `Welcome, ${me.name}` : 'No member data found'}</p>
            </div>
        </div>
    );
}
