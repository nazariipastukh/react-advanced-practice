import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getPostById: (postId) => apiService.get(urls.postById(postId))
}

export {
    postService
}