import {apiService} from "./apiService";
import {urls} from "../constants";

const usersService = {
    getUsers: () => apiService.get(urls.users),
    postUser: (user) => apiService.post(urls.users, user)
}

export {
    usersService
}