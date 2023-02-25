const baseURL = 'https://api.themoviedb.org/3';

const apiKey = "11b7bc56670c7b26a4ddee66b5228ab7";

const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    search: `/search/movie?api_key=${apiKey}&page=`
}

export {
    baseURL,
    urls
}