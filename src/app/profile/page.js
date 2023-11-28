import React from "react";
import { cookies } from "next/headers";
import axios from "axios";
import Content from "./content";

const fetchData = async (jwt) => {
    try {
        const raw = await axios.get("/api/profile", {
            headers: {
                Authorization: jwt,
            },
        });
        return raw?.data || {};
    } catch (err) {
        return { error: err.data };
    }
};
export default async function Profile() {
    return (
        <section className="w-full md:w-11/12 lg:w-8/12 mx-auto mt-8">
            <Content />
        </section>
    );
}
