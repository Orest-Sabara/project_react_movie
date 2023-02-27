import './App.css';
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {RouterEndpoints} from "./routes/routes";
import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {InfoPage} from "./pages/InfoPage/InfoPage";


function App() {
    return (
        <div>
            <Routes>
                <Route path={RouterEndpoints.index} index element={<MoviesPage/>}/>
                <Route path={RouterEndpoints.info} element={<InfoPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
