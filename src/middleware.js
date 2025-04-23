import { NextResponse,  NextRequest } from 'next/server';
import { cookies } from 'next/headers';
// import { isAuthenticated } from '@lib/auth';

export default async function middleware(NextRequest) {
  // Define public routes
  const publicRoutes = [,'/login', '/_next', '/signup', '/landing', '/about'];
  // Check if the request is for a public route
  const isPublicRoute = publicRoutes.some(route => NextRequest.nextUrl.pathname.match(route));
  console.log("NextRequest.nextUrl.pathname",NextRequest.nextUrl.pathname);
  console.log("isPublicRoute",isPublicRoute);
  if (!isPublicRoute){
  const token = NextRequest.cookies.get('auth_token');  // Retrieve the token from cookies
  // const token = true;
    // If no token is found, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/login?alert=true', NextRequest.url));
    }
  }
  // Allow the request to continue if no issues
  return NextResponse.next();
}
export const config = {
  matcher: ['/home', '/dashboard', '/admin'],  // Apply only to these paths
  skipTrailingSlashRedirect: true,
}