import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const resp = await axios.get(
            `http://localhost:5001/api/properties/${params.id}`
        );
        return NextResponse.json(resp.data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.data }, { status: 500 });
    }
}
