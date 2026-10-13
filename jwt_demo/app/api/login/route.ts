import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// POST request aane par ye function chalega
export async function POST(request: Request) {

  // Frontend se username aur password receive karo
  const { username, password } = await request.json();

  // Demo ke liye temporary users
  const users = [
    {
      id: 1,
      username: "admin",
      password: "1234",
      name: "Alice",
      role: "Admin",
    },
    {
      id: 2,
      username: "student",
      password: "1234",
      name: "Bob",
      role: "Student",
    },
  ];

  // Credentials match karne wala user find karo
  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password
  );

  // User nahi mila toh login reject
  if (!user) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  // User valid hai, ab JWT generate karo
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
      algorithm: "HS256",
    }
  );

  // Token frontend ko return karo
  return NextResponse.json({
    message: "Login successful",
    token: token,
  });
}