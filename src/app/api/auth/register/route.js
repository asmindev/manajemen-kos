import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
    );
}

export async function POST(request) {
    try {
        const requestBody = await request.text();
        const result = JSON.parse(requestBody);
        const resp = await axios.post(
            "http://localhost:5000/api/auth/register",
            { ...result }
        );
        return NextResponse.json({ data: resp.data }, { status: 201 });
    } catch (err) {
        return NextResponse.json(
            { error: "something went wrong" },
            { status: 500 }
        );
    }
}
