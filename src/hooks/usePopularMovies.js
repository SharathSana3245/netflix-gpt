import { Api_Options } from '../utils/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", Api_Options);
        const result = await data.json();
        dispatch(addPopularMovies(result.results))
    }
    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies;