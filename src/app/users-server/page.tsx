import { useEffect, useState } from "react"
type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string   
}

export default async function UsersServer() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users: User[] = await response.json()
    
    /** Create list design for users and add white background and black text */
    return <div className="space-y-2 p-2">
        {users.map((user) => (
            /** Create List view foe show cuser detail as given in type User */
            <div key={user.id} className="bg-gray-200 text-black p-2 rounded-md">
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </div>
        ))}
    </div>
}

