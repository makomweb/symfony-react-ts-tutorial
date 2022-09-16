import axios from "axios";
import {User} from "../components/User";

type UserResponse = {
    users: User[];
}

export function getUsers(): Promise<UserResponse> {
    return axios.get(
        '/api/users',
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}
