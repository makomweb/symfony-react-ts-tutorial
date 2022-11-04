import React, {createContext, useEffect, useReducer} from "react";
import {getPlayers, score, reset} from "../services/PlayersService";
import {Player} from "../components/Player";

export const PlayersContext = createContext(null);

function reduce(state, action) {
    const { type } = action;
    switch (type) {
        case 'LOADING_FINISHED': {
            const {payload} = action;
            return {players: payload};
        }

        case 'START_INCREASING_SCORE': {
            const {id} = action;
            return {
                players: state.players.map(p => {
                    if (p.id === id) {
                        return {...p, score: p.score + 1, increasing: true};
                    }
                    return p;
                })
            };
        }

        case 'FINISH_INCREASING_SCORE': {
            const {id} = action;
            return {
                players: state.players.map(p => {
                    if (p.id === id) {
                        return {...p, increasing: false};
                    }
                    return p;
                })
            };
        }

        case 'START_RESETTING_SCORES': {
            return {
                players: state.players.map(p => {
                    return { ...p, score: 0, increasing: true }
                })
            }
        }

        case 'FINISH_RESETTING_SCORES': {
            return {
                players: state.players.map(p => {
                    return { ...p, increasing: false }
                })
            }
        }

        default: return state;
    }
}

function PlayersContextProvider(props) {
    const [state, dispatch] = useReducer(reduce, { players: null });

    useEffect(() => {
        (async () => { await fetchPlayers(); })();
        return () => {}
    }, []);

    const fetchPlayers = async () => {
        try {
            const response = await getPlayers();
            const {data} = response;
            dispatch({type: 'LOADING_FINISHED', payload: data});
        }
        catch (ex: any) {
            console.error('failed to load players: ', ex);
        }
        finally {
            console.log('finished loading players');
        }
    }

    const increaseScore = (player: Player) => {
        dispatch({ type: 'START_INCREASING_SCORE', id: player.id });
        score(player.id)
            .then(_ => {
            })
            .catch(error => {
                console.error('failed to increase score: ', error);
            })
            .finally(() => {
                dispatch({ type: 'FINISH_INCREASING_SCORE', id: player.id });
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
        <PlayersContext.Provider value={
            { players: state.players, increaseScore, resetScores }
        }>
            {props.children}
        </PlayersContext.Provider>
    );
}

export default PlayersContextProvider;
