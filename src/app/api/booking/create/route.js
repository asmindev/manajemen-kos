import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const resp = await axios.post(
            "http://localhost:5002/api/booking/create",
            { ...data }
        );
        // console.log(resp.data);
        return NextResponse.json(resp.data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.data }, { status: 500 });
    }
}
