"use client";

import { useEffect } from "react";

export default function AdminRedirect() {
    useEffect(() => {
        // Redirect to the standalone admin.html page
        window.location.href = "/o2menu/admin.html";
    }, []);

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <p>Redirecting to admin page...</p>
            <p>
                If you are not redirected, <a href="/o2menu/admin.html">click here</a>.
            </p>
        </div>
    );
}
