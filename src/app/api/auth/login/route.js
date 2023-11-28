import axios from "axios";
import { NextResponse } from "next/server";
import { decoded } from "@/utils";
import { cookies } from "next/headers";

export async function POST(request) {
    console.log({ user: request.user });
    try {
        const cookiesStore = cookies();
        const requestBody = await request.text();
        const result = JSON.parse(requestBody);
        const resp = await axios.post("http://localhost:5000/api/auth/login", {
            ...result,
        });
        const user = decoded(resp?.data?.token || "");
        user.token = resp?.data?.token || "";
        cookiesStore.set(
            "token",
            resp?.data?.token.replace("Bearer ", "") || "",
            { secure: true }
        );

        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "something went wrong" },
            { status: 500 }
        );
    }
}
