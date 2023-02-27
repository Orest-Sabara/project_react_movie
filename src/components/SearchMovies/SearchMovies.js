import React, { useState } from "react";
import { movieService } from "../../services";
import { MoviesListCard } from "../MoviesListCard/MoviesListCard";
import css from './SearchMovies.module.css'

const SearchMovies = () => {
    const [searchKey, setSearchKey] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (event) => {
        event.preventDefault();
        try {
            const { data } = await movieService.searchMovie(searchKey);
            const movies = data.results.filter((movie) =>
                movie.title.toLowerCase().includes(searchKey.toLowerCase())
            );
            setMovies(movies);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={searchMovies} >
                <input
                    className="px-3 py-2 w-64 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search movie"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type="submit">
                    <img className={css.imgSearch} src="https://cdn-icons-png.flaticon.com/128/9072/9072446.png" alt=""/>
                </button>
            </form>

            <div className='mt-10'>
                <div className={css.wrapper}>
                    {movies.map((movie) => (
                        <MoviesListCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export { SearchMovies };