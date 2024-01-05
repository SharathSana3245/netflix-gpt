import React,{useEffect} from 'react';
import { Api_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice'
const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    //fetchng the trailer and updating the store
    const fetchVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, Api_Options);
        const videoJson = await data.json();
        const filterData = videoJson.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : videoJson.results[0]
        dispatch(addTrailerVideo(trailer.key))

    }
    useEffect(() => {
        fetchVideo()
    }, [])
};

export default useMovieTrailer