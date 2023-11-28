import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
    const cookiesStore = cookies();
    // delete cookies
    if (cookiesStore.delete("token")) {
        return NextResponse.json({ message: "logout sucessfull" }).status(200);
    }
    return NextResponse.json({ error: "something went wrong" }).status(500);
}
