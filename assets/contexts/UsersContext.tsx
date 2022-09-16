import React, {createContext, useEffect, useState} from "react";
import getUsers from "../services/UsersService";

export const UsersContext = createContext(null);

function UsersContextProvider(props) {
    const [users, setUsers] = useState(null)

    useEffect(() => fetchUsers(), []);

    const fetchUsers = () => {
        getUsers()
            .then(response => {
                const { data } = response;
                setUsers(data);
            })
            .catch(error => {
                console.error('failed to load users: ', error);
            })
            .finally(() => {
                console.log('finished loading users')
            });
    }

    return (
        <UsersContext.Provider value={{ users }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;
