import {useState, useEffect} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import {API_KEY} from "../../services/apiService";
import css from './PopularMovie.module.css'


export function PopularMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        axios
            .get(apiUrl)
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.error(error));
    }, []);


    return (
        <div className={css.container}>
            <h2 className={css.text}>Новинки світового прокату</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className={css.divContainer}>
                            {/*<h3 className={css.text}>{movie.title}</h3>*/}
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            {/*<p>{movie.overview}</p>*/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
