import React from 'react';
import { Header } from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import { MainContainer } from './mainContainer';
import { SecondaryContainer } from './secondaryContainer';
import { GptSearch } from './GptSearch';
import { useSelector } from 'react-redux';
export function Browse(props) {
    const gpt = useSelector((store) => store.gpt)
    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();
    return (
        <div>
            <Header />
            {gpt.ShowGptSearch ? <GptSearch /> : <><MainContainer />
                <SecondaryContainer /></>}

        </div>
    )
}
