import {apiService} from "./apiService";
import {urls} from "../constants";

const commentsService = {
    getComments: () => apiService.get(urls.comments)
}

export {
    commentsService
}