import React from "react";

export default function Modal({ children }) {
    return (
        <div className="bg-white/10 backdrop-blur-lg fixed top-0 left-0 w-full h-screen">
            <div className="w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}
