import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getComments: (postId) => apiService.get(urls.commentsByPostId(postId))
}

export {
    commentsService
}