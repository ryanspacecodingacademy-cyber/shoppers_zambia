import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vendor route protection
  if (pathname.startsWith("/vendor")) {
    // For now, allow access - full auth will be enforced client-side
    // This prevents middleware from blocking the route
    return NextResponse.next()
  }

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    // For now, allow access - full auth will be enforced client-side
    // This prevents middleware from blocking the route
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/vendor/:path*", "/admin/:path*"],
}

