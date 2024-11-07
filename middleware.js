import { NextResponse } from "next/server";
import checkUser from "./app/actions/checkUser";

export async function middleware (request) {
  const { isAuth } = await checkUser()

  const pathname = request.nextUrl.pathname
  const protectedRoutes = ['/rooms/add', '/rooms/user', 'bookings']
  const isProtectedRoute = protectedRoutes.some(path => pathname.startsWith(path))

  if (isAuth && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/rooms/add', '/rooms/user', '/bookings', '/login']
}