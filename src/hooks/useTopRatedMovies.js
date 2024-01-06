import { Api_Options } from '../utils/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', Api_Options);
        const result = await data.json();
        dispatch(addTopRatedMovies(result.results))
    }
    useEffect(() => {
        getTopRatedMovies()
    }, [])
}

export default useTopRatedMovies;