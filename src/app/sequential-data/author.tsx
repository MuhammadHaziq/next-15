type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string   
}
export default async function Author({id}: {id: number}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const users: User = await response.json()
    return (
        <div>
            <h1>{users.name}</h1>
        </div>
    )
}