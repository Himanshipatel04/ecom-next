import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, password } = body;

    // Basic auth check
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      return NextResponse.json({
        success: true,
        message: "Login successful",
        token: "sample-jwt-token",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}