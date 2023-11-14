import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getCars: () => apiService.get(urls.cars),
    createCar: (car) => apiService.post(urls.cars, car),
    updateCar: (id, car) => apiService.put(urls.byId(id), car),
    deleteCar: (id) => apiService.delete(urls.byId(id))
}

export {
    carService
}
