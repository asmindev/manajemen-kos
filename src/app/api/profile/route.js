import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const resp = await axios.get("http://localhost:5000/api/user/profile", {
            headers: {
                Authorization: `Bearer ${request.headers.get("authorization")}`,
            },
        });
        return NextResponse.json(resp.data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.data }, { status: 500 });
    }
}
