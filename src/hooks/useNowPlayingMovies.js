import { Api_Options } from '../utils/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", Api_Options);
        const result = await data.json();
        dispatch(addNowPlayingMovies(result.results))
    }
    useEffect(() => {
        getNowPlaying()
    }, [])
}

export default useNowPlayingMovies;