import ReactStars from "react-stars/dist/react-stars";

const StarsRating = ({movie}) => {
    const {vote_average} = movie

    return (

        <div>
            <ReactStars count={10} size={27} value={vote_average}/>
        </div>
    );
};

export {StarsRating};
