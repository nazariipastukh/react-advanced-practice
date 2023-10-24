import {apiService} from "./apiService";
import {urls} from "../constants";

const commentsService = {
    getComments: () => apiService.get(urls.comments),
    postComment: (comment) => apiService.post(urls.comments, comment)
}

export {
    commentsService
}