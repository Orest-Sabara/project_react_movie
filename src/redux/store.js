import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices";
import {genresReducer} from "./slices/genreSlice";


let rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};