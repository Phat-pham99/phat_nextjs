import { NextResponse,  NextRequest } from 'next/server';
import { cookies } from 'next/headers';

// import { isAuthenticated } from '@lib/auth';

export default async function middleware(NextRequest) {
  // const { pathname } = NextRequest.nextUrl;
  const cookieStore = await cookies();
  console.log("cookieStore.getAll()",cookieStore.getAll());
  const token = NextRequest.cookies.get('auth_token');  // Retrieve the token from cookies
  // const token = true;
    // If no token is found, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/public/login?alert=true', NextRequest.url));
    }
  // Allow the request to continue if no issues
  return NextResponse.next();
}

// Exclude:
// 1. /api/auth/* (exclude authentication API routes)
// 2. /public/* (exclude all public routes)
// 3. /_next/static and /_next/image (exclude Next.js internal assets)
// 4. /static/* (exclude custom static files)
// 5. /favicon.ico (exclude favicon)
export const config = {
  matcher: [
    '/((?!api/auth|login|public|_next/static|_next/image|static|favicon.ico).*)',
  ],
  skipTrailingSlashRedirect: true,
}