import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/movieSlice"
import {MovieInfoFullData} from "../MovieInfoFullData/MovieInfoFullData";

const MovieInfo = () => {
    const id = localStorage.getItem('pickedMovieId');

    const {movieById} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
    },[]);
    return (
        <div>
            <div>
                {movieById && <MovieInfoFullData key={movieById.id} movieById={movieById}/>}
            </div>
        </div>
    );
};

export {MovieInfo};