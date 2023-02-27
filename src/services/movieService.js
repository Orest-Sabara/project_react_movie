import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => apiService.get('/discover/movie', {params:{page}}),
    getById: (id) => apiService.get(`/movie/${id}`),
    searchMovie: (query) => apiService.get(`${urls.search}&language=uk-UA&query=${query}&page=1&include_adult=false`),
};

export {movieService};