import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    movieById: null,
    errors: null,
    loading: null,

};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload;
        })
    }),
});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {getAllMovies, getMovieById};

export {moviesReducer, moviesActions};

