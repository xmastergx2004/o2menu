"use client";

import Link from "next/link";
import { FaList, FaCoffee } from "react-icons/fa";
import { useState } from "react";

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/admin/categories" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                            <FaList size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Manage Categories</h2>
                            <p className="text-gray-600 mt-1">Add, edit, or remove menu categories.</p>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/products" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                            <FaCoffee size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Manage Products</h2>
                            <p className="text-gray-600 mt-1">Add, edit, or remove products within categories.</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">System Actions</h2>
                <SeedButton />
            </div>
        </div>
    );
}

function SeedButton() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSeed = async () => {
        if (!confirm("This will populate the database with default data. Continue?")) return;

        setLoading(true);
        setMessage("");
        try {
            const { menuData } = await import("@/data/menuData");
            const { seedDatabase } = await import("@/lib/db");
            await seedDatabase(menuData);
            setMessage("Database seeded successfully!");
        } catch (error) {
            console.error("Error seeding database:", error);
            setMessage("Failed to seed database.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleSeed}
                disabled={loading}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
                {loading ? "Seeding..." : "Seed Database with Default Data"}
            </button>
            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
        </div>
    );
}
