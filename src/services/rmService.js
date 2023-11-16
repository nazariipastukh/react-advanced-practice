import {apiService} from "./apiService";
import {urls} from "../constants";

const rmService = {
    getEpisodes: (page) => apiService.get(urls.episodes, {params: {page}}),
    getCharacters: (ids) => apiService.get(urls.charactersByEpisode(ids))
}

export {
    rmService
}