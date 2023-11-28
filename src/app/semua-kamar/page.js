import React from "react";
import axios from "axios";
import Image from "next/image";
import Content from "./content";
const fetchData = async () => {
    try {
        const raw = await axios.get("http://localhost:3000/api/properties");
        return raw?.data || {};
    } catch (err) {
        return { error: err.data };
    }
};

export default async function Page() {
    const data = await fetchData();

    return (
        <div className="w-full h-full md:w-10/12 mx-auto">
            <div>
                <h1>Semua kamar</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Content data={data} />
            </div>
        </div>
    );
}
