import {apiService} from "./apiService";
import {endpoints} from "../constants";

const flightsService = {
    getFlight: () => apiService.get(endpoints.base)
}

export {
    flightsService
}