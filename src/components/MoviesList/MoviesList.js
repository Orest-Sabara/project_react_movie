import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";

import css from './MoviesList.module.css'


const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);


    const moviesList = movies.results;

    useEffect(() => {
        dispatch(moviesActions.getAllMovies());

    }, [dispatch]);

    return (
        <div>
            <p className={css.title}>Останні надходження</p>
            <div className={css.wrapper}>
                {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};