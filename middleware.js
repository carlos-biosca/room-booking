import { NextResponse } from "next/server";

export async function middleware (request) {
  const isLogged = false
  if (!isLogged) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/bookings', '/rooms/user', '/rooms/add']
}