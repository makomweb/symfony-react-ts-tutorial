import axios from "axios";
import {User} from "../components/User";

export function getUsers() {
    return axios.get<Array<User>>(
        '/api/users',
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}

export function score(userId: number) {
    return axios.patch<User>(
        `/api/users/${userId}/score`,
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}

export function reset() {
    return axios.delete('/api/users/scores');
}
