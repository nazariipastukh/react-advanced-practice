import {jsonApiService} from "./apiService";
import {urls} from "../constants";

class JsonService {
    getAllPosts() {
        return jsonApiService.get(urls.posts)
    }

    getAllUsers() {
        return jsonApiService.get(urls.users)
    }
}

export const jsonService = new JsonService()