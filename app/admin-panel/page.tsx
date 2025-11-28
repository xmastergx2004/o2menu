"use client";

export default function AdminPanel() {
    return (
        <iframe
            src="/o2menu/admin.html"
            style={{
                width: '100%',
                height: '100vh',
                border: 'none',
                position: 'fixed',
                top: 0,
                left: 0
            }}
            title="Admin Panel"
        />
    );
}