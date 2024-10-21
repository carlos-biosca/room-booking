import { NextResponse } from "next/server";
import checkUser from "./app/actions/checkUser";

export async function middleware (request) {
  const { isAuth } = checkUser()
  if (!isAuth) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/bookings', '/rooms/add']
}