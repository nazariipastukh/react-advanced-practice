import {apiService} from "./apiService";
import {endpoints} from "../constants";

const postsService = {
    getPosts: () => apiService.get(endpoints.base),
    // getById: (id) => apiService.get(endpoints.byId(id))
}

export {
    postsService
}