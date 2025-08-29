import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { approvePurchase, setContributionRate } from "../features/data/dummyDataSlice";

export default function DashboardMerchant() {
    const dispatch = useDispatch();
    const { purchases, merchants } = useSelector(s => s.dummy);
    const merchant = merchants[0];
    const merchantPurchases = purchases.filter(p => p.merchantId === merchant.id);

    const [query, setQuery] = useState("");
    const [rate, setRate] = useState(merchant.contributionRate || 0);

    function handleApprove(id) {
        dispatch(approvePurchase(id));
        alert("Purchase approved!");
    }

    function handleSetRate(e) {
        e.preventDefault();
        dispatch(setContributionRate({ merchantId: merchant.id, rate: Number(rate) }));
        alert("Rate updated");
    }

    const usersMatched = useSelector(s => s.dummy.users).filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Merchant Dashboard — {merchant.store}</h1>

            <section className="bg-white p-4 rounded shadow mb-6">
                <h2 className="font-semibold mb-2">Approve Purchases</h2>
                <table className="w-full text-sm">
                    <thead><tr><th>Customer</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        {merchantPurchases.map(p => (
                            <tr key={p.id} className="border-t">
                                <td>{p.customer}</td>
                                <td>${p.amount}</td>
                                <td>{p.status}</td>
                                <td>
                                    {p.status === "pending" ? <button onClick={() => handleApprove(p.id)} className="px-2 py-1 rounded bg-green-600 text-white">Approve</button> : <span>—</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="bg-white p-4 rounded shadow mb-6">
                <h2 className="font-semibold mb-2">Lookup Customer</h2>
                <input className="w-full p-2 border rounded mb-3" placeholder="Search by name or email" value={query} onChange={e => setQuery(e.target.value)} />
                <ul>
                    {usersMatched.map(u => (
                        <li key={u.id} className="py-1 border-b">{u.name} — {u.email} — Points: {u.points}</li>
                    ))}
                    {usersMatched.length === 0 && <li className="text-sm text-gray-500">No results</li>}
                </ul>
            </section>

            <section className="bg-white p-4 rounded shadow mb-6">
                <h2 className="font-semibold mb-2">Set Contribution Rate</h2>
                <form onSubmit={handleSetRate} className="flex gap-2 items-center">
                    <input type="number" min="0" max="100" className="p-2 border rounded" value={rate} onChange={e => setRate(e.target.value)} />
                    <button className="px-3 py-1 rounded bg-blue-600 text-white">Set</button>
                </form>
            </section>

            <section className="bg-white p-4 rounded shadow">
                <h2 className="font-semibold mb-2">Notifications</h2>
                <ul>
                    {(merchant.notifications || []).map((n, i) => <li key={i} className="py-1 border-b">{n}</li>)}
                    {(merchant.notifications || []).length === 0 && <li className="text-sm text-gray-500">No notifications</li>}
                </ul>
            </section>
        </div>
    );
}
