import React, {createContext, useEffect, useReducer} from "react";
import {getUsers, score, reset} from "../services/UsersService";
import {User} from "../components/User";

export const UsersContext = createContext(null);

function reduce(state, action) {
    const { type } = action;
    switch (type) {
        case 'ON_LOAD_USERS_SUCCESS': {
            const {payload} = action;
            return {users: payload};
        }

        case 'START_INCREASING_SCORE': {
            const {id} = action;
            return {
                users: state.users.map(u => {
                    if (u.id === id) {
                        return {...u, score: u.score + 1, increasing: true};
                    }
                    return u;
                })
            };
        }

        case 'FINISH_INCREASING_SCORE': {
            const {id} = action;
            return {
                users: state.users.map(u => {
                    if (u.id === id) {
                        return {...u, increasing: false};
                    }
                    return u;
                })
            };
        }

        case 'START_RESETTING_SCORES': {
            return {
                users: state.users.map(u => {
                    return { ...u, score: 0, increasing: true }
                })
            }
        }

        case 'FINISH_RESETTING_SCORES': {
            return {
                users: state.users.map(u => {
                    return { ...u, increasing: false }
                })
            }
        }

        default: return state;
    }
}

function UsersContextProvider(props) {
    const [state, dispatch] = useReducer(reduce, { users: null });

    useEffect(() => {
        (async () => { await fetchUsers(); })();
        return () => {}
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            const {data} = response;
            dispatch({type: 'ON_LOAD_USERS_SUCCESS', payload: data});
        }
        catch (ex: any) {
            console.error('failed to load users: ', ex);
        }
        finally {
            console.log('finished loading users');
        }
    }

    const increaseScore = (user: User) => {
        dispatch({ type: 'START_INCREASING_SCORE', id: user.id });
        score(user.id)
            .then(_ => {
            })
            .catch(error => {
                console.error('failed to increase score: ', error);
            })
            .finally(() => {
                dispatch({ type: 'FINISH_INCREASING_SCORE', id: user.id });
            });
    }

    const resetScores = () => {
        dispatch({type: 'START_RESETTING_SCORES'});
        reset()
            .then(_ => {
            })
            .catch(error => {
                console.error('failed to reset scores: ', error);
            })
            .finally(() => {
                dispatch({ type: 'FINISH_RESETTING_SCORES' });
            });
    }

    return (
        <UsersContext.Provider value={
            { users: state.users, increaseScore, resetScores }
        }>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;
