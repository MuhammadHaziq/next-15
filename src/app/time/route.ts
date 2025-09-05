// ========================================
// ROUTE SEGMENT CONFIG - Controls caching and rendering behavior
// ========================================

/** 
 * DYNAMIC RENDERING CONFIGURATION
 * 
 * Options:
 * - "auto" (default): Next.js decides based on usage of dynamic functions
 * - "force-dynamic": Always render dynamically (server-side on each request)
 * - "force-static": Always render statically (at build time)
 * - "error": Force static and throw error if dynamic functions are used
 * 
 * Current: "force-static" - This route will be pre-rendered at build time
 * Result: Same timestamp will be returned for all requests (until revalidation)
 */
export const dynamic = "force-static";

/** 
 * REVALIDATION CONFIGURATION
 * 
 * Controls how often statically generated content should be regenerated:
 * - false (default): Never revalidate (cache indefinitely)
 * - 0: Never cache (always dynamic)
 * - number: Revalidate after N seconds
 * 
 * Current: 10 seconds - Static content will be regenerated every 10 seconds
 * 
 * How it works:
 * 1. First request after build: Returns cached static version
 * 2. Subsequent requests within 10s: Returns same cached version
 * 3. After 10s: Next request triggers regeneration, returns new version
 * 4. Process repeats
 */
export const revalidate = 10;

// ========================================
// GET ROUTE HANDLER - Returns current timestamp
// ========================================
export async function GET(request: Request) {
  // Generate current timestamp in ISO format
  const time = new Date().toISOString();
  
  // Log timestamp for debugging (useful to see when route actually executes)
  console.log("Route executed at:", time);
  
  // Return timestamp as JSON response
  return Response.json({ 
    time,
    // Additional metadata for debugging
    generated: "This timestamp shows when the route was last executed",
    caching: "Due to force-static + revalidate:10, this updates every 10 seconds"
  });
}