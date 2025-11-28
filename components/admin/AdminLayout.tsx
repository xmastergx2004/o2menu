"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FaChartPie, FaList, FaCoffee, FaSignOutAlt } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: <FaChartPie /> },
        { name: "Categories", href: "/admin/categories", icon: <FaList /> },
        { name: "Products", href: "/admin/products", icon: <FaCoffee /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">O2 Admin</h1>
                </div>
                <nav className="mt-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors ${pathname === item.href ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : ""
                                }`}
                        >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-6 py-3 text-red-600 hover:bg-red-50 transition-colors mt-auto"
                    >
                        <span className="mr-3"><FaSignOutAlt /></span>
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed top-0 w-full bg-white shadow-sm z-10 p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">O2 Admin</h1>
                <button onClick={handleLogout} className="text-red-600"><FaSignOutAlt /></button>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-8 md:p-12 mt-16 md:mt-0 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
