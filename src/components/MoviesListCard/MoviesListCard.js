import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    const navigate = useNavigate();

    const info = () => {
        localStorage.setItem('pickedMovieId',id)
        navigate('/info');
    };

    return (
        <div onClick={info} className={css.container}>
            <div >
                <h3 className={css.text}>{original_title}
                    <div>
                        <PosterPreview  key={id} poster_path={poster_path} />
                    </div>
                <div>
                    <StarsRating movie={movie}/>
                </div>
                </h3>
            </div>
        </div>
    );
};

export {MoviesListCard};


