import Link from "next/link";

export default function Notifications() {
    return (
        <div>
            <h1>Notifications</h1>
            <div>
                <Link href="/dashboard/archived">Archived</Link>
            </div>
        </div>
    )
}