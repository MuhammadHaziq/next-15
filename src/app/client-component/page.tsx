"use client"
import { runServerOnlyCode } from "@/utils/server-only"
export default function ClientComponent() {
    return <div>Client Component {runServerOnlyCode()}</div>
}