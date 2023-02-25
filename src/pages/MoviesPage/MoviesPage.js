import {useState} from "react";
import Header from "../../components/Header/Header";
import {PopularMovies} from "../../components/PopularMovie/PopularMovie";
import {MoviesList} from "../../components";

const MoviesPage = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div>
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