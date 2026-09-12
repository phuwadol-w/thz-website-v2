import { NextRequest, NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════
// POST /api/admin/login — Admin login for GrapesJS builder
// Sets a session cookie to protect /admin/builder
// ═══════════════════════════════════════════════════════

const ADMIN_EMAIL = "admin@thz.co.th";
const ADMIN_PASSWORD = "THZ-admin-2026";
const ADMIN_TOKEN = "thz-admin-2026-token";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true, message: "Login successful" });
      response.cookies.set("thz-admin-token", ADMIN_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      });
      return response;
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
