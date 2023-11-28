"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Booking({ room, setModal, setChoice }) {
    const [isPayment, setPayment] = useState(false);
    const current = new Date();
    const createBooking = async () => {
        const post = await axios.post("/api/booking/create", {
            propertyId: room.id,
            userId: "user123",
            bookingId: "booking123",
            checkInDate: current.getTime(),
        });
        console.log(post.data);
        setPayment(true);
    };
    const checkPayment = () => {
        console.log("clicked");
    };
    return (
        <div className="bg-white border p-6 rounded-xl">
            {isPayment ? (
                <div className="">
                    <h1>Bayar</h1>
                    <div className="mt-4">
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setPayment(false)}
                                className="py-2 text-sm px-5 block border hover:bg-red-600 hover:text-white rounded-lg"
                            >
                                Kembali
                            </button>
                            <button
                                onClick={checkPayment}
                                type="button"
                                className="py-2 text-sm px-5 block bg-indigo-400 hover:bg-indigo-600 text-white rounded-lg"
                            >
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-xl font-bold mb-4 text-gray-700">
                        Booking kamar
                    </h1>
                    <div className="w-full flex gap-4">
                        <div className="w-full md:w-1/2 flex justify-end">
                            <Image
                                width={300}
                                height={250}
                                src={room?.image}
                                alt="test"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div>
                                <span className="flex gap-4">
                                    <h1 className="text-lg font-bold text-indigo-600">
                                        {room.name}
                                    </h1>
                                    {room.status === "Available" ? (
                                        <h1 className="bg-green-100 text-green-600 py-1 px-4 text-[12px] rounded-xl">
                                            {room.status}
                                        </h1>
                                    ) : (
                                        <h1 className="bg-orange-100 text-orange-600 py-1 px-4 text-[12px] rounded-xl">
                                            {room.status}
                                        </h1>
                                    )}
                                </span>
                                <p className="mt-4 text-gray-600 text-sm">
                                    {room.description}
                                </p>
                            </div>
                            <div className="">
                                <h1 className="text-gray-600">
                                    Rp {room.price}/Bulan
                                </h1>
                                <h3 className="text-sm mt-2 mb-1 text-gray-700">
                                    Fasilitas
                                </h3>
                                <div className="flex gap-2">
                                    {room.facilities.map((item) => (
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
                    <div className="mt-4">
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    setChoice(null);
                                    setModal(false);
                                }}
                                className="py-2 text-sm px-5 block border hover:bg-red-600 hover:text-white rounded-lg"
                            >
                                Kembali
                            </button>
                            <button
                                onClick={createBooking}
                                type="button"
                                className="py-2 text-sm px-5 block bg-indigo-400 hover:bg-indigo-600 text-white rounded-lg"
                            >
                                Buat Pesanan
                            </button>
                        </div>
                        <p className="mt-2 text-xs text-gray-600 before:content-['*'] before:text-red-500 before:mr-1">
                            Untuk pemesanan kamar silahkan lakukan pembayaran
                            segera
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
