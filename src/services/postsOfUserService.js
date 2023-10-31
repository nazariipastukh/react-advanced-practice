import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsOfUserService = {
    getPostsOfUser: (id) => apiService.get(urls.postByUserId(id))
}

export {
    postsOfUserService
}