import React, {useState } from 'react';
import MovieCard from './movieCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export function MovieList({ title, movies }) {
    const [scroll, setScroll] = useState(0)
    const slideLeft = () => {
        const slider = document.getElementById(title);
        let value = slider.scrollLeft - 300
        slider.scrollLeft = value;
        setScroll(value)
    };
    const slideright = () => {
        const slider = document.getElementById(title);
        let value = slider.scrollLeft + 300
        slider.scrollLeft = value;
        setScroll(value)
    }
    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>
                {title}
            </h1>
            <div className='flex'>
                {<button className='text-white' onClick={slideLeft}><ChevronLeftIcon /></button>}
                <div id={`${title}`} className='flex overflow-x-hidden overflow-y-hidden scroll-smooth'>
                    <div className='flex'>
                        {movies?.map((movie) =>
                            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
                        )}
                    </div>
                </div>
                <button onClick={slideright} className='text-white'><ChevronRightIcon /></button>
            </div>

        </div>
    )
}
