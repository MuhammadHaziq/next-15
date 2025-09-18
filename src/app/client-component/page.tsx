"use client"
import { runServerOnlyCode } from "@/utils/server-only"
import { runClientOnlyCode } from "@/utils/client-only"
export default function ClientComponent() {
    return <div>Client Component {runServerOnlyCode()} {runClientOnlyCode()}</div>
}