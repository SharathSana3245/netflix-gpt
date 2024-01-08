import React from 'react';
import { IMG_CDN_URl } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { toggleMoviePage, addMoviePageDetail } from "../utils/moviePageSlice"

export default function MovieCard({ posterPath, movie }) {
    const dispatch = useDispatch();
    const handleMoviePage = (movie) => {
        dispatch(toggleMoviePage());
        dispatch(addMoviePageDetail(movie))
    }
    if (!posterPath) return null
    return (
        <div className='w-48 pr-4 hover:scale-110 cursor-pointer' onClick={()=>{handleMoviePage(movie)}}>
            <img alt="poster" src={IMG_CDN_URl + posterPath} />
        </div>
    )
}
