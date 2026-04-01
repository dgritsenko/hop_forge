// middleware.ts
import { useUser } from '@/hooks/useUser'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const {isAuthenticated} = useUser()
  
  const protectedRoutes = ['/profile', '/beer-constructor', '/catalog', '/order']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  const authRoutes = ['/auth/login', '/auth/registration']
  const isAuthRoute = authRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}