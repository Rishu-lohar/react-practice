import {NextRequest, NextResponse} from "next/server"

export function middleware (request: NextRequest){
    const token = request.cookies.get("token");

    if(!token){
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }
    return NextRequest.next();
}

export const config = {
    matcher: "/dashboard/:path*",
}