import {apiService} from "./apiService";
import {urls} from "../configs";

const genresService = {
    getAll:()=>apiService.get(urls.genres),
    getById:(id)=>apiService.get(`/genre/${id}`)
}

export {
    genresService
}