import { runServerOnlyCode } from "@/utils/server-only"
export default function ServerComponent() {
    return <div>Server Component {runServerOnlyCode()}</div>
}