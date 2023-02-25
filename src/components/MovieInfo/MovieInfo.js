import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/movieSlice"
import {MovieInfoData} from "../MovieInfoData/MovieInfoData";

const MovieInfo = () => {
    const id = localStorage.getItem('pickedMovieId');

    const {movieById} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
    },[dispatch, id]);
    return (
        <div>
            <div>
                {movieById && <MovieInfoData key={movieById.id} movieById={movieById}/>}
            </div>
        </div>
    );
};

export {MovieInfo};