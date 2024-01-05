import React from 'react';
import { useSelector } from 'react-redux';
import { VideoTitle } from './videoTitle';
import { VideosBackground } from './videosBackground';

export function MainContainer(props) {

    const movies = useSelector(store => store.movies?.nowplayingMovies);
    if (!movies) return;
    //this is known as early return 
    //here we are checking wheather we have movies in the store or not.
    const mainMovie = movies[0];
    const { original_title, overview,id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideosBackground movie_id={id}/>
        </div>
    )
}
