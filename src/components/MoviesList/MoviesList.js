import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";

import css from './MoviesList.module.css'
import {SearchMovies} from "../SearchMovies/SearchMovies";
import Genres from "../Genres/Genres";


const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page: query.get('page')}));
    }, [query, dispatch]);

    const moviesList = movies.results;

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <div className='mt-10'>
                <SearchMovies/>
            </div>
            <div>
                <Genres/>
            </div>
            <p className={css.title}>Останні надходження</p>
            <div>

            </div>
            <div className={css.wrapper}>
                {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <div onClick={topFunction} className={css.button}>
                <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md">
                    &#8679;
                </button>
            </div>

            <div className="flex justify-center pt-4 pb-10">
                <button className="px-8 py-2 mr-4 text-white bg-blue-500 rounded-md disabled:opacity-50"
                        disabled={page === 1}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>&#8678;</button>

                <button className="px-8 py-2 ml-4 text-white bg-blue-500 rounded-md"
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>&#8680;</button>
            </div>

        </div>
    );
};

export {MoviesList};