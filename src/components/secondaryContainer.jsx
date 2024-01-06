import React from 'react';
import { MovieList } from './movieList';
import { useSelector } from 'react-redux';

export function SecondaryContainer(props) {
    ///movielist- Popular,trending,nowplaying,genres;
    //horizontal rows with *n movie cards;
    const movies = useSelector(store => store.movies)
    return (
        <div className='bg-black'>
            <div className='-mt-45 pl-14 relative z-20'>
            <MovieList title="Now Playing" movies={movies.nowplayingMovies} key={1}/>
            <MovieList title="Top Rated" movies={movies.topRatedMovies} key={3}/>
            <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} key={4}/>
            <MovieList title="Popular" movies={movies.popularMovies} key={2}/>
            </div>
        </div>
    )
}
