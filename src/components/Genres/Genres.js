import React, { useState } from "react";
import axios from "axios";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./Genres.module.css";
import {API_KEY} from "../../services/apiService";


const Genres = () => {
    const [query] = useState("");
    const [genre, setGenre] = useState("28");
    const [movies, setMovies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&query=${query}`
            )
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie Genres:
                    <select className="px- py-2 w-32 rounded-lg text-gray focus:outline-none focus:shadow-outline"
                        value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="28">Action</option>
                        <option value="12">Adventure</option>
                        <option value="16">Animation</option>
                        <option value="35">Comedy</option>
                        <option value="80">Crime</option>
                        <option value="99">Documentary</option>
                        <option value="18">Drama</option>
                        <option value="10751">Family</option>
                        <option value="14">Fantasy</option>
                        <option value="36">History</option>
                        <option value="27">Horror</option>
                        <option value="10402">Music</option>
                        <option value="9648">Mystery</option>
                        <option value="10749">Romance</option>
                        <option value="878">Science Fiction</option>
                        <option value="10770">TV Movie</option>
                        <option value="53">Thriller</option>
                        <option value="10752">War</option>
                        <option value="37">Western</option>
                    </select>
                </label>
                <button type="submit" >
                    <img className={css.imgSearch} src="https://cdn-icons-png.flaticon.com/128/9072/9072446.png" alt=""/>
                </button>
            </form>
            <ul className='mt-10'>
                <div className={css.wrapper}>
                    {movies.map((movie) => (
                        <MoviesListCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Genres;
