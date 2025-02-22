import { NextResponse } from 'next/server'
import { auth } from '../auth'
import { routes } from './lib/routes'

const protectedRoutes = [routes.dashboard, routes.content, routes.paths, routes.path]

export default auth((req) => {
    if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
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

// export default clerkMiddleware(async (auth, req) => {

//     // For users visiting /onboarding, don't try to redirect
//     if (isOnboardingRoute(req)) {
//         return NextResponse.next()
//     }

//     if (isProtectedRoute(req)) {
//         const { userId, sessionClaims, redirectToSignIn } = await auth()
//         // If the user isn't signed in and the route is private, redirect to sign-in
//         if (!userId) return redirectToSignIn({ returnBackUrl: req.url })
//         // Catch users who do not have `onboardingComplete: true` in their publicMetadata
//         // Redirect them to the /onboading route to complete onboarding
//         if (userId && !sessionClaims?.metadata?.onboardingComplete && !isAPIRoute(req)) {
//             const onboardingUrl = new URL('/onboarding', req.url)
//             return NextResponse.redirect(onboardingUrl)
//         }
//         // If the user is logged in and the route is protected, let them view.
//         if (userId) return NextResponse.next()
//     }

// })

// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//         // Always run for API routes
//         '/(api|trpc)(.*)',
//     ],
// }