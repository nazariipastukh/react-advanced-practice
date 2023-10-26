import {apiService} from "./apiService";
import {urls} from "../constants";

const todosService = {
    getTodos: () => apiService.get(urls.todos)
}

export {
    todosService
}