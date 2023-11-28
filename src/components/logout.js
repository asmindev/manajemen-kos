"use client";
import React from "react";
export default function Logout() {
    const logOut = async () => {
        const raw = await fetch("/api/auth/logout");
        const res = await raw.json();
        if (raw.status === 200) {
            localStorage.removeItem("token");
        }
    };
    return (
        <button type="button" onClick={logOut}>
            logout
        </button>
    );
}
