import {apiService} from "./apiService";
import {urls} from "../constants";

const albumsService = {
    getAlbums: () => apiService.get(urls.albums)
}

export {
    albumsService
}