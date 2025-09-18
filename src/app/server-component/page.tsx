import { runServerOnlyCode } from "@/utils/server-only"
import { runClientOnlyCode } from "@/utils/client-only"
export default function ServerComponent() {
    return <div>Server Component {runServerOnlyCode()} {runClientOnlyCode()}    </div>
} 