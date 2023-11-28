"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/components/modal";
import Booking from "./booking";

export default function Content({ data }) {
    const [modal, setModal] = useState(false);
    const [choice, setChoice] = useState(null);
    const preview = (id) => {
        setChoice(data.filter((room) => room.id === id)[0]);
        setModal(true);
    };

    return (
        <>
            {modal && (
                <Modal>
                    <Booking
                        room={choice}
                        setModal={setModal}
                        setChoice={setChoice}
                    />
                </Modal>
            )}
            {data?.map((room) => (
                <button
                    type="button"
                    onClick={() => preview(room.id)}
                    key={room.id}
                    className="w-full text-left"
                >
                    <div className="w-full flex justify-end">
                        <Image
                            width={300}
                            height={250}
                            src={room?.image}
                            alt="test"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-between py-4">
                        <div>
                            <span className="flex gap-4">
                                <h1 className="text-lg font-bold text-indigo-600">
                                    {room.number}
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
                        </div>
                        <div className="">
                            <h1 className="text-gray-600 text-sm font-semibold">
                                Rp {room.price}
                            </h1>
                            <h3 className="text-xs font-medium mt-2 mb-1 text-gray-700">
                                Fasilitas
                            </h3>
                            <div className="flex gap-2">
                                {room.facilities.map((room) => (
                                    <span
                                        key={room}
                                        className="text-[10px] py-1 px-4 rounded-lg bg-indigo-50 text-indigo-700"
                                    >
                                        {room}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </button>
            ))}
            ;
        </>
    );
}
