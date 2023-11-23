import {carsApiService} from "./apiService";
import {urls} from "../constants";

class CarsService {
    getAll() {
        return carsApiService.get(urls.cars)
    }
}

export const carService = new CarsService()