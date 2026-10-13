import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: Request) {

  // Request ka Authorization header read karo
  const authHeader = request.headers.get("Authorization");

  // Header hi nahi hai
  if (!authHeader) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 401 }
    );
  }

  // Header Bearer token format mein hona chahiye
  if (!authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Authorization header must use Bearer scheme" },
      { status: 401 }
    );
  }

  // "Bearer " ke 7 characters hata kar token nikalo
  const token = authHeader.slice(7);

  try {
    // Token ki signature aur expiry verify karo
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!,
      { algorithms: ["HS256"] }
    );

    // Verification successful
    return NextResponse.json({
      message: "JWT is valid",
      user: decoded,
    });

  } catch {
    // Invalid ya expired token
    return NextResponse.json(
      { message: "Invalid or expired JWT" },
      { status: 401 }
    );
  }
}