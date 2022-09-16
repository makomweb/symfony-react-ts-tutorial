import axios from "axios";
import {User} from "../components/User";

export default function getUsers() {
    return axios.get<Array<User>>(
        '/api/users',
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
}
