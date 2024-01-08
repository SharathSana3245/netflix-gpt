import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
    name: 'moviePage',
    initialState: {
        moviePage: false,
        movieDetail: null
    },
    reducers: {
        toggleMoviePage: (state, action) => {
            state.moviePage = !state.moviePage
        },
        addMoviePageDetail: (state, action) => {
            state.movieDetail = action.payload
        }
    }
});

export const { toggleMoviePage, addMoviePageDetail } = moviePageSlice.actions;

export default moviePageSlice.reducer;