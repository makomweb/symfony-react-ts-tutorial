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
        console.log('increase score!');
        score(user.id)
            .then(response => {

            })
            .catch(error => {

            })
            .finally(() => {

            });
    }

    return (
        <UsersContext.Provider value={{ users, increaseScore }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;
