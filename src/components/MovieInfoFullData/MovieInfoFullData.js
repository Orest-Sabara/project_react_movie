const MovieInfoFullData = ({movieById}) => {

    const {original_title,budget,overview,backdrop_path} = movieById;

    const fullPoster = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    return (
        <div>
            <div >
                <div>
                    <img src={fullPoster} alt={original_title}/>
                </div>
                <div>
                    <div>title: {original_title}</div>
                    <div>overview: {overview}</div>
                    <div>budget: ${budget}</div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfoFullData};