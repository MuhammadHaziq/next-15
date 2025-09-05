// ========================================
// IMPORTS EXPLANATION
// ========================================
import {type NextRequest} from "next/server";  // NextRequest provides additional properties like cookies, geo, ip, etc.
import { comments } from "./data";              // Local data store for comments
// import { headers } from "next/headers";      // Next.js server function to access headers (readonly)
import { cookies } from "next/headers";         // Next.js server function to access and modify cookies

// ========================================
// GET ROUTE HANDLER - Fetches comments with optional search
// ========================================
export async function GET(request: NextRequest) {
  // Extract search parameters from the URL (?search=keyword)
  const { searchParams } = request.nextUrl;
  const searchQuery = searchParams.get("search");

  // ========================================
  // COOKIE HANDLING - Two Different Approaches
  // ========================================
  
  /** 
   * APPROACH 1: Direct access from request object
   * - Only for reading cookies
   * - Returns RequestCookie object or undefined
   * - More straightforward for simple cookie reading
   */
  // const theme = request.cookies.get("theme");
  // console.log(theme); // { name: 'theme', value: 'dark' } or undefined

  /** 
   * APPROACH 2: Using Next.js cookies() function (RECOMMENDED)
   * - Can both read AND write cookies
   * - Returns ReadonlyRequestCookies object
   * - Better for server-side cookie management
   * - Automatically handles cookie serialization
   */
  const cookieStore = await cookies();
  const themeValue = cookieStore.get("theme");
  console.log("Current theme cookie:", themeValue); // { name: 'theme', value: 'current_value' }
  
  // Set a new cookie (will be included in the response)
  cookieStore.set("theme", "Light");
  console.log("Cookie store after setting:", cookieStore.get("theme"));
  
  // ========================================
  // RESPONSE LOGIC
  // ========================================
  
  // If search query exists, filter comments that contain the search term
  if (searchQuery) {
    const filteredComments = comments.filter((comment) => 
      comment.comment.includes(searchQuery)
    );
    return Response.json(filteredComments);
  }
  
  // Return all comments with custom headers
  return Response.json(comments, {
    headers: {
      "Content-Type": "application/json",
      /** 
       * ALTERNATIVE: Setting cookies via Headers API
       * - Manual approach using Set-Cookie header
       * - Less convenient than cookies() function
       * - Use this when you need more control over cookie attributes
       */
      // "Set-Cookie": `theme=dark; Path=/; HttpOnly; SameSite=Strict`,
    },
  });
}

// ========================================
// POST ROUTE HANDLER - Creates a new comment with authentication
// ========================================
export async function POST(request: Request) {
  // Extract comment data from request body
  const { comment } = await request.json();
  
  // ========================================
  // HEADER HANDLING - Three Different Approaches
  // ========================================
  
  /** 
   * APPROACH 1: Creating new Headers instance
   * - Creates a copy of the original headers
   * - Use when you need to modify headers without affecting original
   * - Slightly more memory usage due to object creation
   * - Good for middleware or when forwarding modified requests
   */
  // const modifiableHeaders = new Headers(request.headers);
  // const token = modifiableHeaders.get("Authorization");

  /** 
   * APPROACH 2: Direct access to request headers (RECOMMENDED FOR READING)
   * - Most efficient approach for reading headers
   * - No additional object creation
   * - Direct access to the Headers object
   * - Best performance for simple header reading operations
   */
  const token = request.headers.get("Authorization");

  /** 
   * APPROACH 3: Using Next.js headers() function
   * - Server-side headers access (readonly)
   * - Useful in Server Components and API routes
   * - Returns ReadonlyHeaders object
   * - Good when you need headers in multiple places in your app
   */
  // const headerStore = await headers();
  // const token = headerStore.get("Authorization");

  // ========================================
  // AUTHENTICATION LOGIC
  // ========================================
  
  // Simple token-based authentication check
  if (token !== "1234567890") {
    return Response.json(
      { message: "Unauthorized" }, 
      { status: 401 }
    );
  }

  // ========================================
  // DATA MANIPULATION & RESPONSE
  // ========================================
  
  // Create new comment with auto-incremented ID
  const newComment = { 
    id: comments.length + 1, 
    comment 
  };
  
  // Add to in-memory data store (in production, use a database)
  comments.push(newComment);
  
  // Return created comment with 201 status and custom headers
  return Response.json(newComment, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
      // Add any additional response headers here
      // "X-Created-At": new Date().toISOString(),
      // "X-Comment-ID": newComment.id.toString(),
    },
  });
}
