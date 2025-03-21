import { NextResponse } from 'next/server'
import { auth } from '../auth'
import { routes } from './lib/routes'

const protectedRoutes = [routes.mylessons, routes.content, routes.paths, routes.path]
const freeRoutes = [routes.communityGallery, routes.home]

export default auth((req) => {
    const auth = req.auth
    if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    } else if (auth && freeRoutes.includes(req.nextUrl.pathname)) {
        return Response.redirect(new URL(routes.paths, req.nextUrl.origin))
    }

    return NextResponse.next()
})

// Configure which routes to protect
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
}
