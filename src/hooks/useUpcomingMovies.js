import { Api_Options } from '../utils/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', Api_Options);
        const result = await data.json();
        dispatch(addUpcomingMovies(result.results))
    }
    useEffect(() => {
        getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;