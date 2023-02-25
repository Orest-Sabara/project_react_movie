import {MovieInfo} from "../../components/MovieInfo/MovieInfo";
import {useState} from "react";
import Header from "../../components/Header/Header";

const InfoPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

  return (
      <div className={'box'}>
          <div className={isDarkMode ? "App" : "App dark-mode"}>
              <header>
                  <Header/>
                  <button onClick={handleToggleTheme} className="switch">
                      {isDarkMode ? "Dark Mode" : "Light Mode"}
                  </button>
              </header>
              <main>
                  <MovieInfo/>
              </main>
          </div>
      </div>
  )
}

export {InfoPage}