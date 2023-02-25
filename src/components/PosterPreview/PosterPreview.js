const PosterPreview = ({poster_path}) => {

    const imgPoster = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div>
            <img src={imgPoster} alt="moviePoster"/>
        </div>
    );
};

export {PosterPreview};