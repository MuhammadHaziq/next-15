// ========================================
// NEXT.JS MIDDLEWARE - Runs before route handlers and pages
// ========================================
// Location: Must be in 'src/middleware.ts' or 'middleware.ts' (project root)
// Execution: Runs on EVERY request that matches the matcher config

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ========================================
// MIDDLEWARE FUNCTION - Main logic executed on matched routes
// ========================================
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  console.log(`🔥 Middleware executing for: ${pathname}`);

  // ========================================
  // COOKIE MANAGEMENT - Set default theme if not present
  // ========================================
  const theme = request.cookies.get("theme");
  console.log("🍪 Current theme cookie:", theme);

  // Create response object to modify
  let response = NextResponse.next();

  // Set default theme cookie if not present
  if (!theme) {
    console.log("🎨 Setting default theme to 'dark'");
    response.cookies.set("theme", "dark", {
      path: "/",
      httpOnly: false, // Allow client-side access if needed
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax"
    });
  }

  // ========================================
  // ROUTE PROTECTION - Dashboard access control
  // ========================================
  
  // Check if user is accessing dashboard routes
  if (pathname.startsWith("/dashboard")) {
    console.log("🔒 Dashboard access detected - checking authentication");
    
    // Get authentication token from cookies or headers
    const authToken = request.cookies.get("authToken") || request.headers.get("Authorization");
    
    if (!authToken) {
      console.log("❌ No auth token found - redirecting to login");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
    // Optional: Validate token here
    // if (!isValidToken(authToken.value)) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
    
    console.log("✅ Authentication valid - allowing access");
  }

  // ========================================
  // ADDITIONAL MIDDLEWARE LOGIC
  // ========================================
  
  // Example: Add custom headers to all responses
  response.headers.set("X-Middleware-Executed", "true");
  response.headers.set("X-Pathname", pathname);
  
  // Example: Log API requests
  if (pathname.startsWith("/api")) {
    console.log(`📡 API Request: ${request.method} ${pathname}`);
  }

  // Return the response (with any modifications)
  return response;
}

// ========================================
// MATCHER CONFIGURATION - Define which routes middleware should run on
// ========================================
export const config = {
  /**
   * Matcher patterns determine which routes trigger middleware
   * 
   * Current config: Runs on dashboard routes only
   * 
   * Other examples:
   * - matcher: '/' - Only home page
   * - matcher: '/api/:path*' - All API routes
   * - matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] - All routes except excluded
   * - matcher: ['/dashboard/:path*', '/profile/:path*'] - Multiple specific paths
   */
  matcher: [
    "/",
    "/dashboard/:path*", // All dashboard routes and subroutes
    // "/api/:path*",     // Uncomment to run on all API routes
    // "/((?!_next/static|_next/image|favicon.ico).*)" // Uncomment to run on all routes
  ]
};

// ========================================
// MIDDLEWARE EXECUTION FLOW
// ========================================
/*
 * 1. User requests a URL that matches the matcher pattern
 * 2. Next.js runs this middleware function BEFORE the route handler/page
 * 3. Middleware can:
 *    - Modify the request (headers, cookies)
 *    - Modify the response (headers, cookies)  
 *    - Redirect to different URLs
 *    - Rewrite URLs (internal redirects)
 *    - Block requests (return error responses)
 * 4. If middleware returns NextResponse.next(), the request continues normally
 * 5. If middleware returns a redirect/rewrite, that takes effect immediately
 */

// ========================================
// DEBUGGING TIPS
// ========================================
/*
 * 1. Check browser Network tab for middleware effects
 * 2. Look for console.log output in terminal (not browser)
 * 3. Verify matcher patterns are correct
 * 4. Test with different routes to confirm execution
 * 5. Use NextResponse.json() for debugging responses
 */