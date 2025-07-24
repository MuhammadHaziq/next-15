"use client"
import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <div>
            <h1>Error In Review</h1>
            <button onClick={reload} className="bg-blue-500 text-white p-2 rounded-md">Try again</button>
        </div>
    )
}