"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/components/userContext";
import { saveDataToLocalStorage } from "@/utils";

export default function Form() {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);
    async function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            email: form.get("email"),
            password: form.get("password"),
        };
        const post = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (post.status == 200) {
            const result = await post.text();
            setUser(JSON.parse(result));
            saveDataToLocalStorage("token", JSON.parse(result).token);
            router.push("/");
        }
    }
    useEffect(() => {
        user.name && router.push("/");
    }, [user, router]);
    return (
        <form
            onSubmit={(e) => {
                onSubmit(e);
            }}
        >
            <div className="flex flex-col mt-4">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="px-2 py-3 focus:outline-none border rounded"
                ></input>
            </div>
            <div className="flex flex-col mt-4">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="px-2 py-3 focus:outline-none border rounded"
                ></input>
            </div>
            <button
                type="submit"
                className="mt-4 bg-indigo-500 px-4 py-3 text-white rounded"
            >
                Submit
            </button>
        </form>
    );
}
