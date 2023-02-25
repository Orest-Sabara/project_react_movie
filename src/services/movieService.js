import {apiService} from "./apiService";

const movieService = {
    getAll: () => apiService.get('/discover/movie'),
    getById: (id) => apiService.get(`/movie/${id}`),
};

export {movieService};