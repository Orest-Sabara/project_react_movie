import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState = {
    genres: [],
    errors: null,
    loading: null
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
});

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getGenres
}

export {
    genresReducer,
    genresActions
}