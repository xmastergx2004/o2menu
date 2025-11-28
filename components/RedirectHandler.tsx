"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectHandler() {
    const router = useRouter();

    useEffect(() => {
        const redirect = sessionStorage.getItem("redirect");
        if (redirect) {
            sessionStorage.removeItem("redirect");
            // Extract the path from the full URL
            const url = new URL(redirect);
            const path = url.pathname.replace("/o2menu", "");
            if (path && path !== "/") {
                router.push(path);
            }
        }
    }, [router]);

    return null;
}
