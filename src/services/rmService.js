import {apiService} from "./apiService";
import {urls} from "../constans";

const rmService = {
    getEpisodes: (page = '1') => apiService.get(urls.episodes, {params: {page}}),
    getCharacters: (ids) => apiService.get(urls.characters(ids))
}

export {
    rmService
}