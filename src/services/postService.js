import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getPost: (id) => apiService.get(urls.postById(id))
}

export {
    postService
}