import React from "react";
import { useSelector } from "react-redux";

export default function DashboardAdmin() {
    const { users, merchants } = useSelector(s => s.dummy);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <section className="mb-6 bg-white p-4 rounded shadow">
                <h2 className="font-semibold mb-2">Users</h2>
                <table className="w-full text-sm">
                    <thead className="text-left">
                        <tr><th>Name</th><th>Email</th><th>Points</th></tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id} className="border-t">
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="bg-white p-4 rounded shadow">
                <h2 className="font-semibold mb-2">Merchants</h2>
                <table className="w-full text-sm">
                    <thead className="text-left">
                        <tr><th>Store</th><th>Email</th><th>Contribution Rate</th></tr>
                    </thead>
                    <tbody>
                        {merchants.map(m => (
                            <tr key={m.id} className="border-t">
                                <td>{m.store}</td>
                                <td>{m.email}</td>
                                <td>{m.contributionRate}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
