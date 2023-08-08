import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname === "/login") {
    if (token) {
      // If user is logged in and tries to access the login page, redirect to home or another page
      return NextResponse.redirect(new URL("/", req.url));
    }
    // If user is not logged in and is on the login page, allow access
    return NextResponse.next();
  }

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // If user is not authenticated and not on the login page, redirect to login
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
