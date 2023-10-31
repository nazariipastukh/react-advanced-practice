import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getUsers: () => apiService.get(urls.users)
}

export {
    usersService
}