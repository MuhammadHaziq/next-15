import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <div>
            <h1>Archived Notifications</h1>
            <div>
                <Link href="/dashboard">Back to Notifications</Link>
            </div>
        </div>
    )
}