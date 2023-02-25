import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getAll: () => apiService.get('/discover/movie'),
    getById: (id) => apiService.get(`/movie/${id}`),
    searchMovie: (query) => apiService.get(`${urls.search}&language=uk-UA&query=${query}&page=1&include_adult=false`)

};

export {movieService};