import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genreSlice";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {
    const {id, original_title, poster_path,  genre_ids} = movie;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])

    const info = () => {
        localStorage.setItem('pickedMovieId',id)
        navigate('/info');
    };

    return (
        <div onClick={info} className={css.container}>
            <div className={css.text}>
                <h3>{original_title}</h3>
                    <div>

                        <div className={css.container}>
                            <PosterPreview  key={id} poster_path={poster_path} />
                            <div className={css.badge}>
                                {genre_ids.map(id =>
                                    <div key={id}>
                                        {genres.map(genre => id === genre.id && <GenreBadge key={genre.id} genre={genre}/>)}
                                    </div>)}
                            </div>
                        </div>
                    </div>
                <div>
                    <StarsRating movie={movie}/>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};


