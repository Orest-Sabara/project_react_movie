import React, { useState } from "react";
import { movieService } from "../../services";
import { MoviesListCard } from "../MoviesListCard/MoviesListCard";

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
                    className="px-3 py-2 w-64 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search movie"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type="submit"><svg
                    className="h-6 w-6 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.5 17A7.5 7.5 0 102 9.5 7.5 7.5 0 009.5 17zM18 19.5l3.5 3.5-1.5 1.5L16.5 21l-3.5 3.5-1.5-1.5L14.5 21l-3.5-3.5 1.5-1.5L14.5 19l3.5-3.5 1.5 1.5z"
                        clipRule="evenodd"
                    />
                </svg></button>
            </form>

            <div>
                {movies.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export { SearchMovies };