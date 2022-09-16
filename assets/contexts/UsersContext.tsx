import React, {createContext, useEffect, useReducer, useState} from "react";
import {getUsers, score} from "../services/UsersService";
import {User} from "../components/User";

export const UsersContext = createContext(null);

function reduce(state, action) {
    const { type } = action;

    switch (type)
    {
        case 'ON_LOAD_USERS_SUCCESS': {
            const {payload} = action;
            return {users: payload};
        }

        case 'START_INCREASING_SCORE': {
            const {id} = action;
            return {
                users: state.users.map(u => {
                    if (u.id === id) {
                        return {...u, score: u.score + 1};
                    }
                    return u;
                })
            };
        }
        default: return state;
    }
}

function UsersContextProvider(props) {
    const [state, dispatch] = useReducer(reduce, { users: [] });

    useEffect(() => fetchUsers(), []);

    const fetchUsers = () => {
        getUsers()
            .then(response => {
                const { data } = response;
                dispatch({ type: 'ON_LOAD_USERS_SUCCESS', payload: data });
            })
            .catch(error => {
                console.error('failed to load users: ', error);
            })
            .finally(() => {
                console.log('finished loading users')
            });
    }

    const increaseScore = (user: User) => {
        dispatch({ type: 'START_INCREASING_SCORE', id: user.id });
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
        <UsersContext.Provider value={{ users: state.users, increaseScore }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;
