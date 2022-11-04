import axios from "axios";
import {Player} from "../components/Player";

export function getPlayers() {
    return axios.get<Array<Player>>(
        '/api/players',
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}

export function score(userId: number) {
    return axios.patch<Player>(
        `/api/players/${userId}/score`,
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}

export function reset() {
    return axios.delete('/api/players/scores');
}
