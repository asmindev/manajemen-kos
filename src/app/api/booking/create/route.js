import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        console.log(data)
        const resp = await axios.post(
            "http://localhost:5002/api/bookings",
            { ...data }
        );
        // console.log(resp.data);
        return NextResponse.json(resp.data, { status: 200 });
    } catch (err) {
        console.log({err})
        return NextResponse.json({ error: err.data }, { status: 500 });
    }
}
