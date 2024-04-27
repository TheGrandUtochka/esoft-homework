import { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
            })
    }, []);

    return(
        <div>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>@{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;