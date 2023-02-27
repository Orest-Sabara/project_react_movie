const MovieInfoData = ({movieById}) => {

    const {original_title,budget,overview,backdrop_path, original_language, release_date, vote_average, revenue, runtime, status} = movieById;

    const fullPoster = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    return (
        <div className="w-3/4 m-auto mt-20 ">
            <div className="text-lg font-bold mb-10">{original_title}</div>
            <div className="flex justify-between ">
                <div className="w-1/2 ml-10">
                    <img src={fullPoster}
                         alt={original_title}/>
                </div>
                <div className="flex-1 mx-4 mb-20">
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Budget:</div>
                        <div>${budget}</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Language:</div>
                        <div>{original_language}</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Release Date:</div>
                        <div>{release_date}</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Vote Average:</div>
                        <div>{vote_average}</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Revenue:</div>
                        <div>${revenue}</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Runtime:</div>
                        <div>{runtime} mins</div>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-1/3 font-bold">Status:</div>
                        <div>{status}</div>
                    </div>
                </div>
            </div>
            <div className="text-xl text-gray-600">About Film</div>
            <div className="text-xl text-gray-600 pb-80">{overview}</div>
        </div>
    );
};

export {MovieInfoData}