import axios from "axios";
import {User} from "../components/User";

type UserResponse = {
    users: User[];
}

async function getUsers(): Promise<User[]> {
    try {
        const { data, status } = await axios.get<UserResponse>(
            '/api/users',
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        )

        if (status !== 200) {
            throw Error(`HTTP request failed with ${status}!`)
        }

        return data.users;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            throw Error(error.message);
        }
        else {
            throw Error('An unexpected error has happened!');
        }
    }
}
