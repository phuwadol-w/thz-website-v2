import { NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════
// POST /api/admin/logout — Admin logout
// ═══════════════════════════════════════════════════════

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("thz-admin-token", "", { maxAge: 0, path: "/" });
  return response;
}
