import axios from "axios";

import {jsonURL} from "../../constants";

const jsonApiService = axios.create({baseURL: jsonURL})

export {
    jsonApiService
}