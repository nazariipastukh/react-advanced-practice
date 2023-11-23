import axios from "axios";

import {carsURL} from "../../constants";

const carsApiService = axios.create({baseURL: carsURL})

export {
    carsApiService
}