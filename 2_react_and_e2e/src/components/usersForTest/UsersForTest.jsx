import React, {useEffect, useState} from 'react';
import {json} from "react-router-dom";
import User from "./User";

const UsersForTest = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setTimeout(() => {
                setUsers(json);
                setIsLoading(false);
            }, 1000));
    }, []);

    const onDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id="users-loading">Loading...</h1>}
            {users.length && <div id="users-list">
                {users.map(user => <User onDelete={onDelete} user={user}/>)}
            </div>}
        </div>
    );
};

export default UsersForTest;
