/*
 * Theme Provider Component for Next.js Application
 * 
 * This component uses React Context API to manage theme state across the application.
 * It's marked as a client component because React Context doesn't work in server components.
 * 
 * Why React Context doesn't work in Next.js Server Components:
 * 1. Server components run on the server during build time or request time
 * 2. They don't have access to browser APIs or client-side state
 * 3. Context requires client-side JavaScript to maintain state and re-render components
 * 4. Server components are stateless and render once on the server
 * 5. useState, useContext, and other React hooks only work in client components
 * 
 * Solution: Use "use client" directive to mark this as a client component
 * that runs in the browser where Context API is available.
 */

"use client"
import { createContext, useContext, useState } from "react"

// Define the shape of our theme context
type ThemeContextType = {
    theme: string
    setTheme: (theme: string) => void
}

// Create the theme context with default values
// This provides the structure for theme management across the app
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: (theme: string) => {},
})

// Theme Provider component that wraps the app and provides theme state
// This component maintains the current theme state and provides methods to update it
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Local state to track the current theme (starts with "light" theme)
    const [theme, setTheme] = useState("light")
    
    // Provide the theme state and setter function to all child components
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to consume the theme context
// This hook allows any component to access and modify the theme state
export const useTheme = () => {
    return useContext(ThemeContext)
}