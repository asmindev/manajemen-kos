import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const fetchData = async () => {
    try {
        const raw = await axios.get("http://localhost:3000/api/properties");
        return raw?.data || {};
    } catch (err) {
        return { error: err.data };
    }
};

export default async function Home() {
    const data = await fetchData();
    const sample = data[2];
    const available = data?.filter((e) => e.status === "Available");
    const rented = data.length - available.length;
    return (
        <section className="w-full md:w-11/12 lg:w-10/12 mx-auto">
            <div className="h-[70vh] flex items-center justify-center">
                <div className="w-full lg:w-1/2 mx-auto text-center flex flex-col items-center">
                    <h2
                        className={`uppercase w-fit text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 ${poppins.className}`}
                    >
                        Kos aman dan nyaman
                    </h2>
                    <p className="text-sm text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quisquam eaque quos aperiam provident suscipit.
                    </p>
                    <h3 className="text-lg text-indigo-500 mt-4 underline">
                        Kelompok 5
                    </h3>
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="my-12">
                    <h1 className="w-fit text-2xl font-black bg-clip-text text-transparent bg-gradient-to-l from-indigo-500 to-pink-500">
                        Lorem, ipsum dolor.
                    </h1>
                </div>
                <div className="w-full flex gap-4 mb-14">
                    <div className="w-full md:w-1/2 flex justify-end">
                        <Image
                            width={300}
                            height={250}
                            src={sample?.image}
                            alt="test"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <div>
                            <span className="flex gap-4">
                                <h1 className="text-lg font-bold text-indigo-600">
                                    {sample.name}
                                </h1>
                                {sample.status === "Available" ? (
                                    <h1 className="bg-green-100 text-green-600 py-1 px-4 text-[12px] rounded-xl">
                                        {sample.status}
                                    </h1>
                                ) : (
                                    <h1 className="bg-orange-100 text-orange-600 py-1 px-4 text-[12px] rounded-xl">
                                        {sample.status}
                                    </h1>
                                )}
                            </span>
                            <p className="mt-4 text-gray-600 text-sm">
                                {sample.description}
                            </p>
                        </div>
                        <div>
                            <h1 className="text-gray-600">Rp {sample.price}</h1>
                            <h3 className="text-sm mt-2 mb-1 text-gray-700">
                                Fasilitas
                            </h3>
                            <div className="flex gap-2">
                                {sample.facilities.map((item) => (
                                    <span
                                        key={item}
                                        className="text-[10px] py-1 px-4 rounded-lg bg-indigo-50 text-indigo-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/semua-kamar" className="text-indigo-600 underline">
                    Lihat semua kamar
                </Link>
            </div>
            <div className="my-40 w-11/12 md:w-8/12 lg:w-1/2 mx-auto ">
                <div className="w-full text-center flex justify-center">
                    <h1 className="w-fit text-2xl font-black bg-clip-text text-transparent bg-gradient-to-l from-indigo-500 to-pink-500">
                        Fasilitas
                    </h1>
                </div>
                <span className="mt-4 block text-center text-sm text-gray-600">
                    Kami mempunyai 10 kamar. Dari 10 kamar yang ada, {rented}{" "}
                    kamar yang telah disewakan dan
                    <p className="text-indigo-500 px-1 inline-block">
                        {available.length} kamar
                    </p>
                    yang tersedia. Dengan kamar mandi dalam, parkiran yang luas,
                    rooftop untuk menjemur cucian
                </span>
            </div>
        </section>
    );
}
