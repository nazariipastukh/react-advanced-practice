import {apiService} from "./apiService";
import {urls} from "../constants";


const carsService = {
    getAll: () => apiService.get(urls.base),
    createCar: (car) => apiService.post(urls.base, car),
    updateCar: (id, car) => apiService.put(urls.byId(id), car),
    deleteCar: (id) => apiService.delete(urls.byId(id))
}

export {
    carsService
}