import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const resp = await axios.post(
            "http://localhost:5002/api/booking/create",
            {
                data: {
                    name: "asmin",
                },
            }
        );
        console.log(resp.data);
        return NextResponse.json(resp.data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.data }, { status: 500 });
    }
}
