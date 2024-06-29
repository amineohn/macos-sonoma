import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const code = request.cookies.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/secret/verify", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/secret/:path*",
};
