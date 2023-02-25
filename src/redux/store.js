// import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import {movieReducer} from "./slices";
//
// const rootReducer = combineReducers({
//     movies:movieReducer
// })
//
// const setupStore = () => configureStore({
//     reducer: rootReducer
// });
//
// export {setupStore}

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices";


let rootReducer = combineReducers({
    movies: moviesReducer,
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};