type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string   
}
type Album = {
    id: number
    title: string
    userId: number
}

const getUserByID = async (id: string): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
}

const getUserAlbums = async (id: string): Promise<Album[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
    return response.json();
}

export default async function ParallelData({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
   
    const [user, albums] = await Promise.all([getUserByID(id), getUserAlbums(id)]);
    /** Create list design for users and add white background and black text */
    return (<div className="space-y-2 p-2">
            {/** Create List view foe show cuser detail as given in type User */ }
            <div key={user.id} className="bg-gray-200 text-black p-2 rounded-md">
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <h1>Albums</h1>
                {albums.map((album) => (
                    <div key={album.id}>{album.title}</div>
                ))}
            </div>
    </div>)
}