import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the login page through
  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  const auth = request.cookies.get("site-auth")?.value;
  if (auth !== process.env.AUTH_SECRET) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
