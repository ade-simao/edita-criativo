import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "dashboard-session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authenticated = request.cookies.has(SESSION_COOKIE);

  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname === "/dashboard/login";

  if (isDashboard && !isLogin && !authenticated) {
    return NextResponse.redirect(new URL("/dashboard/login", request.url));
  }

  if (isLogin && authenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
