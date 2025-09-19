"use client"
import { useEffect, useState } from "react"
type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string   
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        (async() => {
            try {
            await fetchUsers();
        } catch (error) {
            if(error instanceof Error){
                setError(error?.message)
            }else{
                setError("An unknown error occurred")
            }
        } finally {
            setLoading(false);
        }})();
               
            },[])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    /** Create list design for users and add white background and black text */
    return <div>
        {users.map((user) => (
            /** Create List view foe show cuser detail as given in type User */
            <div key={user.id} className="bg-gray-200 text-black p-2 m-2 rounded-md">
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </div>
        ))}
    </div>
}

