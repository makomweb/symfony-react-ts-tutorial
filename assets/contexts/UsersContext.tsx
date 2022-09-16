import React, {createContext, useEffect, useState} from "react";
import {getUsers, score} from "../services/UsersService";
import {User} from "../components/User";

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

    const increaseScore = (user: User) => {
        // TODO update the UI ???
        score(user.id)
            .then(response => {
                // TODO update the UI ???
            })
            .catch(error => {
                console.error('failed to increase score: ', error);
            })
            .finally(() => {
                console.log('finished increasing score');
            });
    }

    return (
        <UsersContext.Provider value={{ users, increaseScore }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;
