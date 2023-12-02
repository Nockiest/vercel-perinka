import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', request.url))
    //   }
    console.log(process.env.ARTICLE_EDIT_PASSWORD)
  return    NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/aktualni-cislo/:path*',
}