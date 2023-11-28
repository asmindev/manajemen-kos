"use client";

import React, { useState } from "react";
import Modal from "@/components/modal";
import BarName from "./barName";
export default function Content() {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    };
    return (
        <div>
            {modal && (
                <Modal>
                    <div className="bg-white border w-1/3 p-6 rounded-xl">
                        <h1 className="text-2xl font-bold">Pembayaran</h1>
                        <div className="mt-4">
                            <div>
                                <h1 className="font-semibold text-gray-700">
                                    Total: Rp 500.000,00
                                </h1>
                            </div>
                            <div className=" flex gap-2">
                                <button
                                    onClick={openModal}
                                    type="button"
                                    className="mt-2 border px-3 py-1 text-sm hover:bg-indigo-600 hover:text-white transition-all duration-150"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="mt-2 bg-indigo-400 px-3 py-1 text-sm text-white hover:bg-indigo-600 transition-all duration-150"
                                >
                                    Bayar
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            <BarName />
            <div className="w-full h-[70vh] flex items-center">
                <div>
                    <div className="w-full">
                        <h1 className="text-2xl text-gray-700 font-bold">
                            Kamar 401
                        </h1>
                    </div>
                    <div className="mt-4">
                        <h2>Pembayaran Kost</h2>
                        <p>Pembayaran selanjutnya: 10-12-2023</p>
                        <button
                            onClick={openModal}
                            type="button"
                            className="bg-indigo-400 text-white py-3 px-4 mt-4 text-sm hover:bg-indigo-600 transition-all duration-200"
                        >
                            Bayar sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
