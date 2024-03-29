import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowplayingMovies: null,
        trailerVideo: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowplayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo,addUpcomingMovies,addPopularMovies,addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;