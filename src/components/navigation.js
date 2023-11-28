"use client";
import React, { useContext } from "react";
import { UserContext } from "./userContext";
import Link from "next/link";

export default function Navigation() {
    const { user } = useContext(UserContext);
    return (
        <header className="w-full">
            <nav className="w-10/12 mx-auto py-6">
                <div className="flex justify-between items-center">
                    <div className="w-fit text-gray-500">
                        <Link
                            href="/"
                            className="font-bold text-xl text-gray-700"
                        >
                            Adza Kost
                        </Link>
                    </div>
                    <div className="text-gray-500 flex items-center gap-6">
                        <ul className="flex gap-2 text-sm">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                        </ul>
                        <div>
                            {user.name ? (
                                <div className="flex gap-2">
                                    <Link
                                        href="/profile"
                                        className="capitalize text-white text-sm bg-indigo-500 py-1 px-4 rounded"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <Link href="/auth/login">Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
