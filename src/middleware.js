import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    request.user = "root";
    const cookiesStore = cookies();
    const cookiesAuth = cookiesStore.get("token")?.value;
    if (!cookiesAuth) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/profiles",
};
