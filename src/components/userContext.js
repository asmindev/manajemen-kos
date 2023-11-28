"use client";
import React, { createContext, useState, useEffect } from "react";
import { getDataFromLocalStorage, decoded } from "@/utils";
const UserContext = createContext({});
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        if (!user.name) {
            const data = getDataFromLocalStorage("token");
            if (data) {
                const decode = decoded(data);
                setUser(decode);
            }
        }
    }, [user]);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
