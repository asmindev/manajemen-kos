"use client";
import React from "react";

export default function Form() {
    async function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            name: form.get("name"),
            email: form.get("email"),
            password: form.get("password"),
        };
        const post = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (post.status == 200) {
            console.log("created");
        }
    }
    return (
        <form
            onSubmit={(e) => {
                onSubmit(e);
            }}
        >
            <div className="flex flex-col mt-4">
                <label htmlFor="name">Nama</label>
                <input
                    id="name"
                    name="name"
                    className="px-2 py-3 focus:outline-none border rounded"
                ></input>
            </div>
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
