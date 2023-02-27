import {useState} from "react";
import Header from "../../components/Header/Header";
import {PopularMovies} from "../../components/PopularMovie/PopularMovie";
import {MoviesList} from "../../components";
import '../../App.css'
import {useSelector} from "react-redux";


const MoviesPage = () => {

    const {loading} = useSelector(state=>state.movies)

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div>
            {loading &&
                <div className="loading">
                    <h1>Loading</h1>
                    <img className='imgLoading'
                        src="https://cdn-icons-png.flaticon.com/128/25/25220.png" alt="loading"/>
                </div>
            }
            <div className={isDarkMode ? "App" : "App dark-mode"}>
                <header>
                    <Header/>
                    <button onClick={handleToggleTheme} className="switch">
                        {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </button>

                </header>
                <main>
                    <PopularMovies/>
                    <MoviesList/>
                </main>
            </div>
        </div>
    );
}

export {MoviesPage}