import {jsonApiService} from "./apiService";
import {urls} from "../constants";

class JsonService {
    getAllPosts() {
        return jsonApiService.get(urls.posts)
    }

    getAllComments() {
        return jsonApiService.get(urls.comments)
    }
}

export const jsonService = new JsonService()