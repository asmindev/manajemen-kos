"use client";
import { UserContext } from "@/components/userContext";
import React, { useContext } from "react";

export default function BarName() {
    const { user } = useContext(UserContext);
    return (
        <div className="w-full">
            <h1 className="mt-4 text-lg font-black capitalize">{`Welcome Back, ${
                user.name || ""
            }`}</h1>
        </div>
    );
}
