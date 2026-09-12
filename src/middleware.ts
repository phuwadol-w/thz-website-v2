import { NextRequest, NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════
// Admin Authentication Middleware
// Protects /admin/builder and /admin/editor routes
// ═══════════════════════════════════════════════════════

// Simple token-based auth (in production, use JWT with expiry)
const ADMIN_TOKEN = "thz-admin-2026-token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect builder and editor routes
  if (pathname.startsWith("/admin/builder") || pathname.startsWith("/admin/editor")) {
    const token = request.cookies.get("thz-admin-token")?.value;

    if (!token || token !== ADMIN_TOKEN) {
      // Redirect to admin login (Payload CMS login)
      const adminUrl = new URL("/admin", request.url);
      return NextResponse.redirect(adminUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/builder/:path*", "/admin/editor/:path*"],
};
